import "reflect-metadata";
import { NestFactory } from "@nestjs/core";

import { AppModule } from "./app.module";
import { CONFIG } from "./config";
import { GraphQLErrorFilter } from "./middleware/error.middleware";

if (CONFIG.NODE_ENV === "development" && !global.__MSW_SERVER_STARTED__) {
  console.log("⚡ MSW 서버를 server.ts에서 실행...");
  process.on("warning", warning => {
    console.error("NestJS에서 발생한 경고:", warning);
  });

  require("./mocks/server");
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: "Content-Type, Authorization",
  });

  app.useGlobalFilters(new GraphQLErrorFilter()); // 예외 필터 적용
  await app.listen(process.env.PORT ?? 4000);
  process.on("warning", warning => {
    console.error("NestJS에서 발생한 경고:", warning);
  });

  console.log("🚀 Server ready at http://localhost:4000/graphql");
}
bootstrap();

// src/app.module.ts
import { join } from "path";

import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";

import { DashboardModule } from "./graphql/modules/dashboard/dashboard.module";
import { HospitalModule } from "./graphql/modules/hospital/hospital.module";
import { TypeModule } from "./graphql/modules/merge/type.module";
import { NewTypeModule } from "./graphql/modules/newType/newType.module";
import { NotificationModule } from "./graphql/modules/notification/notification.module";
import { UserModule } from "./graphql/modules/user/user.module";
import { RequestLoggerMiddleware } from "./middleware/request.middleware";

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), "src/graphql/schema.gql"),
      sortSchema: true,
      // 해당 로직은 이후 JWT에 대해서 다룰 때 사용 예정. (GraphQL 연결시 인증 목적)
      // context: ({ req }) => {
      //   const token = req.headers.authorization?.split(" ")[1]; // "Bearer <token>"
      //   if (!token) throw new Error("Authentication required");

      //   const jwtService = new JwtService({ secret: process.env.JWT_SECRET });
      //   const user = jwtService.verify(token);
      //   return { user };
      // },

      // 허용된 쿼리 최대 비용 제한 깊이 제한한
      // validationRules: [
      //   costAnalysis({ maximumCost: 1000 }),
      //   depthLimit(5),
      // ],
    }),
    UserModule,
    HospitalModule,
    NotificationModule,
    TypeModule,
    DashboardModule,
    NewTypeModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestLoggerMiddleware).forRoutes("*");
  }
}

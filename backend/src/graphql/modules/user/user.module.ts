import { Module } from "@nestjs/common";

import { UserController } from "./user.controller";
import { UserResolver } from "./user.resolver";
import { UserService } from "./user.service";

@Module({
  providers: [UserService, UserResolver], // GraphQL Resolver + Service 등록
  controllers: [UserController], // REST API Controller 등록
  exports: [UserService], // 다른 모듈에서도 사용 가능
})
export class UserModule {}

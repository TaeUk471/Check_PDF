import { Module } from "@nestjs/common";

import { TypeController } from "./type.controller";
import { TypeResolver } from "./type.resolver";
import { TypeService } from "./type.service";

@Module({
  providers: [TypeService, TypeResolver],
  controllers: [TypeController],
  exports: [TypeService],
})
export class TypeModule {}

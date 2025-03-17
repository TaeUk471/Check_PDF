// src/graphql/modules/merge/type.controller.ts
import { Body, Controller, Get, Param, Post } from "@nestjs/common";

import { TypeService } from "./type.service";
import { TypeInput, TypeMessage } from "./type.type";

@Controller("Type")
export class TypeController {
  constructor(private readonly typeService: TypeService) {}

  @Get(":hospitalId")
  getTypes(@Param("hospitalId") hospitalId: number) {
    return this.typeService.getTypes(hospitalId);
  }

  @Post()
  postTypes(@Body() input: TypeInput): Promise<TypeMessage> {
    return this.typeService.createType(input);
  }
}

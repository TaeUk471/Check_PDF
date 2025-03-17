// src/graphql/modules/merge/type.resolver.ts
import { Args, Int, Mutation, Query, Resolver } from "@nestjs/graphql";

import { TypeService } from "./type.service";
import { Type, TypeFilesOutput, TypeInput, TypeMessage } from "./type.type";

@Resolver(() => Type)
export class TypeResolver {
  constructor(private readonly TypeService: TypeService) {}

  // hospitalId를 GraphQL 인자로 받도록 수정
  @Query(() => TypeFilesOutput)
  async types(@Args("hospitalId", { type: () => Int }) hospitalId: number) {
    return this.TypeService.getTypes(hospitalId);
  }

  @Mutation(() => TypeMessage)
  async createType(@Args("input") input: TypeInput): Promise<TypeMessage> {
    return this.TypeService.createType(input);
  }
}

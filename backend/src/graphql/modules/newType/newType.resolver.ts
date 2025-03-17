import { Args, Int, Query, Resolver } from "@nestjs/graphql";

import { NewTypeService } from "./newType.service";
import { NewType } from "./newType.type";

@Resolver(() => NewType)
export class NewTypeResolver {
  constructor(private readonly NewTypeService: NewTypeService) {}

  @Query(() => NewType)
  async newTypes(@Args("hospitalId", { type: () => Int }) hospitalId: number) {
    console.log("타입타입타입 뉴타입 시작해봅시다 여기가 Newtype resolver");
    return this.NewTypeService.getNewTypes(hospitalId);
  }
}

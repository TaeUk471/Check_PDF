import { Module } from "@nestjs/common";

import { NewTypeResolver } from "./newType.resolver";
import { NewTypeService } from "./newType.service";

@Module({
  providers: [NewTypeService, NewTypeResolver],
  // controllers : []
  exports: [NewTypeService],
})
export class NewTypeModule {}

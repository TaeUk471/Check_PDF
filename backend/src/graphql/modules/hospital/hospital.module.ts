import { Module } from "@nestjs/common";

import { HospitalController } from "./hospital.controller";
import { HospitalResolver } from "./hospital.resolver";
import { HospitalService } from "./hospital.service";

@Module({
  providers: [HospitalService, HospitalResolver],
  controllers: [HospitalController],
  exports: [HospitalService],
})
export class HospitalModule {}

import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";

import { HospitalService } from "./hospital.service";

@Controller("Hospital")
export class HospitalController {
  constructor(private readonly hospitalService: HospitalService) {}

  @Get()
  getHospitals() {
    return this.hospitalService.getHospitals();
  }

  @Post()
  postHospitals(@Body() body: { HospitalName: string; HospitalId: number }) {
    return this.hospitalService.createHospital(body.HospitalId, body.HospitalName);
  }

  @Delete(":hospitalId")
  deleteHospitals(@Param("hospitalId") hospitalId: number) {
    return this.hospitalService.deleteHospital(hospitalId);
  }
}

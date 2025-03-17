import { Args, Int, Mutation, Query, Resolver } from "@nestjs/graphql";

import { HospitalService } from "./hospital.service";
import { Hospital, HospitalResponse } from "./hospital.type";

@Resolver(() => Hospital)
export class HospitalResolver {
  constructor(private readonly hospitalService: HospitalService) {}

  @Query(() => [Hospital])
  async hospitals() {
    return this.hospitalService.getHospitals();
  }

  @Mutation(() => HospitalResponse)
  async createHospital(
    @Args("hospitalId", { type: () => Int }) hospitalId: number,
    @Args("hospitalName", { type: () => String }) hospitalName: string,
  ): Promise<Hospital> {
    return this.hospitalService.createHospital(hospitalId, hospitalName);
  }

  // 리턴 타입 정의가 괄호 안에!
  @Mutation(() => Boolean)
  async deleteHospital(
    @Args("hospitalId", { type: () => Int }) hospitalId: number,
  ): Promise<boolean> {
    const result = await this.hospitalService.deleteHospital(hospitalId);
    return result.success;
  }
}

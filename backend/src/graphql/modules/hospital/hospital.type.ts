import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Hospital {
  @Field(() => Int)
  hospitalId: number;

  @Field()
  hospitalName: string;
}

@ObjectType()
export class HospitalResponse {
  @Field(() => String)
  message: string;

  @Field(() => Hospital)
  hospital: Hospital;
}

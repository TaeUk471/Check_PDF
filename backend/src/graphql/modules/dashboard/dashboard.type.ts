import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Dashboard {
  @Field(() => Int)
  process: number;

  @Field(() => Int)
  success: number;

  @Field(() => Int)
  fail: number;
}

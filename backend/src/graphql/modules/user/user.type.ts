import { ObjectType, Field, ID } from "@nestjs/graphql";

@ObjectType()
export class User {
  @Field(() => ID)
  id: string;

  @Field()
  email: string;

  @Field()
  name: string;

  // @Field({ nullable: true })
  // lastName?: string;

  // @Field({ nullable: true })
  // username?: string;

  // @Field(() => Int, { nullable: true })
  // age?: number;
}

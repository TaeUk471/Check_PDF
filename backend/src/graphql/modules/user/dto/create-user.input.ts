import { Field, InputType } from "@nestjs/graphql";

@InputType() // GraphQL 입력 타입
export class CreateUserInput {
  @Field()
  name: string;

  @Field()
  email: string;
}

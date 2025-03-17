import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";

import { CreateUserInput } from "./dto/create-user.input"; // GraphQL 입력 타입
import { UserService } from "./user.service";
import { User } from "./user.type"; // GraphQL의 반환 타입

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User])
  async users() {
    return this.userService.getUsers();
  }

  @Query(() => User, { nullable: true })
  getUser(@Args("id") id: string) {
    return this.userService.getUser(id);
  }

  @Mutation(() => User)
  async createUser(@Args("input") input: CreateUserInput): Promise<User> {
    return this.userService.createUser(input.name, input.email);
  }

  @Mutation(() => User)
  updateUser(
    @Args("id") id: string,
    @Args("name") name: string,
    @Args("email") email: string,
  ): Promise<User> {
    return this.userService.updateUser(id, name, email);
  }

  @Mutation(() => Boolean)
  async deleteUser(@Args("id") id: string): Promise<boolean> {
    const result = await this.userService.deleteUser(id);
    return result.success;
  }
}

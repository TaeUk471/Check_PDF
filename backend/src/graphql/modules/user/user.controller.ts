import { Controller, Get, Post, Put, Delete, Param, Body } from "@nestjs/common";

import { UserService } from "./user.service";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers() {
    return this.userService.getUsers;
  }

  @Get(":id")
  getUser(@Param("id") id: string) {
    return this.userService.getUser(id);
  }

  @Post()
  createUser(@Body() body: { name: string; email: string }) {
    return this.userService.createUser(body.name, body.email);
  }

  @Put(":id")
  updateUser(@Param("id") id: string, @Body() body: { name: string; email: string }) {
    return this.userService.updateUser(id, body.name, body.email);
  }

  @Delete(":id")
  deleteUser(@Param("id") id: string) {
    return this.userService.deleteUser(id);
  }
}

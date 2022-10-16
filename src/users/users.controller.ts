import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';

import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  async addUser(
    @Body('name') userName: string,
    @Body('email') userEmail: string,
    @Body('password') userPassword: string,
  ) {
    const generatedId = await this.usersService.insertUser(
      userName,
      userEmail,
      userPassword,
    );
    return { id: generatedId };
  }

  @Get()
  async getAllUsers() {
    const users = await this.usersService.getUsers();
    return users;
  }

  @Get('/id/:id')
  getUser(@Param('id') userId: string) {
    return this.usersService.getSingleUser(userId);
  }

  @Get('/login/:email/:password')
  getUserByEmail(@Param('email') userEmail: string, @Param('password') userPassword: string) {
    return this.usersService.getSingleUserByEmail(userEmail, userPassword);
  }

  @Patch(':id')
  async updateUser(
    @Param('id') userId: string,
    @Body('name') userName: string,
    @Body('email') userEmail: string,
    @Body('password') userPassword: string,
  ) {
    await this.usersService.updateUser(userId, userName, userEmail, userPassword);
    return null;
  }

  @Delete(':id')
  async removeUser(@Param('id') userId: string) {
    await this.usersService.deleteUser(userId);
    return null;
  }

}
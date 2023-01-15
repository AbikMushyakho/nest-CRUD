import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { UserService } from './users.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers() {
    return this.userService.getAllUsers();
  }

  @Get(':userId')
  getOneUser(@Param('userId') userId: string) {
    return this.userService.getOneUser(userId);
  }

  @Post()
  insertUser(
    @Body('name') name: string,
    @Body('email') email: string,
    @Body('password') password: string,
    @Body('age') age: number,
  ) {
    const userId = this.userService.insertUser(name, age, email, password);
    return {
      id: userId,
    };
  }

  @Put(':userId')
  updateUser(
    @Param('userId') userId: string,
    @Body('name') name: string,
    @Body('age') age: number,
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    return this.userService.updateUser(userId, name, age, email, password);
  }

  @Delete(':userId')
  deleteUser(@Param('userId') userId: string) {
    return this.userService.deleteUser(userId);
  }
}

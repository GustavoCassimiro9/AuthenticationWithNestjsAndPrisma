import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('create')
  async createUser(@Body() data: {
      Nome: string,
      Email: string,
      Senha: string,
  } ) {
      return this.userService.createUser(data)
  }

  @Get('getuser/:id')
  async getUser(@Param('id') id: string) {
      const userId = {Id: parseInt(id)}
      return await this.userService.getUserById(userId)
  }

}

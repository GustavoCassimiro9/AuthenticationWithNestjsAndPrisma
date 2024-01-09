import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('create')
  async createUser(@Body() data: {
      USR_Nome: string,
      USR_Email: string,
      USR_Senha: string,
  } ) {
      return this.userService.createUser(data)
  }

  @Get('getuser/:id')
  async getUser(@Param('USR_CodigoUsuario') USR_CodigoUsuario: string) {
      const userId = {USR_CodigoUsuario: parseInt(USR_CodigoUsuario)}
      return await this.userService.getUserById(userId)
  }

}

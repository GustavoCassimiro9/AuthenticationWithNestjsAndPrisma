import { UserService } from './../user/user.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import * as  bcrypt from "bcrypt";
import { JwtService } from '@nestjs/jwt';
import { UserAuthentication } from '../user/user.dto';

@Injectable()
export class AuthService {
    constructor(
        private prismaService: PrismaService,
        private userService: UserService,
        private jwtService: JwtService 
    ) {}

    async singIn(data: UserAuthentication) {
        const user = await this.userService.findOne(data);
        if (user) {
            let isMathPassword = await bcrypt.compare(data.USR_Senha, user.USR_Senha);

            if (isMathPassword) {
                const paylaod = {sub: user.USR_CodigoUsuario, userName: user.USR_Nome};
                return {
                    message:`Bem vindo ${user.USR_Nome}`,
                    access_token: await this.jwtService.signAsync(paylaod)
                }
            }
            else {
                const error = {
                    message: "Usuário ou USR_Senha não encontrados"
                } 
                throw new UnauthorizedException(error);
            }
        }
    }
}

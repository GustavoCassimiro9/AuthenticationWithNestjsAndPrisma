import { Prisma } from '@prisma/client';
import { PrismaService } from './../../prisma.service';
import { Injectable } from '@nestjs/common';
import * as  bcrypt from "bcrypt";

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService){}

    async createUser(data: Prisma.UsuarioCreateInput ) {
        const salt = await bcrypt.genSalt();
        data.USR_Senha = await bcrypt.hash(data.USR_Senha, salt);

        return this.prisma.usuario.create({
            data
        });
    }

    async getUserById(data: Prisma.UsuarioWhereUniqueInput) {
        return await this.prisma.usuario.findUnique({
            where: {
                USR_CodigoUsuario: data.USR_CodigoUsuario
            }
        })
    }

    public async findOne(USR_Email: Prisma.UsuarioWhereUniqueInput) {
        return await this.prisma.usuario.findUnique({
                                            where: {
                                                USR_Email: USR_Email.USR_Email
                                            }
                                        });
    }
}

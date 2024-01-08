import { Prisma } from '@prisma/client';
import { PrismaService } from './../../prisma.service';
import { Injectable } from '@nestjs/common';
import * as  bcrypt from "bcrypt";

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService){}

    async createUser(data: Prisma.UsuarioCreateInput ) {
        const salt = await bcrypt.genSalt();
        data.Senha = await bcrypt.hash(data.Senha, salt);

        return this.prisma.usuario.create({
            data
        });
    }

    async getUserById(data: Prisma.UsuarioWhereUniqueInput) {
        return await this.prisma.usuario.findUnique({
            where: {
                Id: data.Id
            }
        })
    }

    public async findOne(email: Prisma.UsuarioWhereUniqueInput) {
        return await this.prisma.usuario.findUnique({
                                            where: {
                                                Email: email.Email
                                            }
                                        });
    }
}

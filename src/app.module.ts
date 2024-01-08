import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  controllers: [AppController],
  providers: [AppService, PrismaService],
  imports: [UserModule, AuthModule],
})
export class AppModule {}

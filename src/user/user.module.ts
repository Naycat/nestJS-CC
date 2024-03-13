import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { Logger } from './logger.provider';
import { UserController } from './user.controller';
import { UserLifecycle } from './user.lifecycle';

@Module({
  controllers: [UserController],
  providers: [UserService, Logger, UserLifecycle],
})
export class UserModule { }

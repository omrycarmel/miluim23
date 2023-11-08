import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { MissionService } from './mission/mission.service';
import { MissionController } from './mission/mission.controller';
import { ShavzakController } from './shavzak/shavzak.controller';
import { ShavzakService } from './shavzak/shavzak.service';
import { AuthService } from './auth/auth.service';

@Module({
  imports: [],
  controllers: [UserController, MissionController, ShavzakController],
  providers: [UserService, MissionService, ShavzakService, AuthService],
})
export class AppModule {}

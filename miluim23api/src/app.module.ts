import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { MissionService } from './mission/mission.service';
import { MissionController } from './mission/mission.controller';
import { ShavzakController } from './shavzak/shavzak.controller';
import { ShavzakService } from './shavzak/shavzak.service';

@Module({
  imports: [],
  controllers: [AppController, UserController, MissionController, ShavzakController],
  providers: [AppService, UserService, MissionService, ShavzakService],
})
export class AppModule {}

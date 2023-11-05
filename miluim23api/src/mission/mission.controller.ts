import { Body, Controller, Get, Post } from '@nestjs/common';
import { MissionService } from './mission.service';
import { Mission } from './mission';

@Controller('mission')
export class MissionController {
    constructor(private missionService: MissionService){}
    @Get()
    getAll() {
        return this.missionService.getAll();
    }

    @Post()
    create(@Body() mission: Mission) {
        return this.missionService.create(mission);
    }
}

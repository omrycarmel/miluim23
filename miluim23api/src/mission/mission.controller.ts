import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { MissionService } from './mission.service';
import { Mission } from './mission';
import { AuthGuard } from 'src/guards/auth.guard';
import { AuthAdminGuard } from 'src/guards/authadmin.guard';

@Controller('mission')
export class MissionController {
    constructor(private missionService: MissionService){}
    @Get()
    @UseGuards(AuthGuard)
    async getAll() {
        return await this.missionService.getAll();
    }

    @Post()
    @UseGuards(AuthAdminGuard)
    async create(@Body() mission: Mission) {
        return await this.missionService.create(mission);
    }
}

import { Body, Controller, Get, Param, Put, UseGuards } from '@nestjs/common';
import { ShavzakService } from './shavzak.service';
import { ShavzakDay } from './Shavzak';
import { CreateShavzakDto } from './CreateShavzakDto';
import { AuthGuard } from 'src/guards/auth.guard';
import { AuthAdminGuard } from 'src/guards/authadmin.guard';

@Controller('shavzak')
export class ShavzakController {

    constructor(private shavzakService: ShavzakService)
    {}    
    @Get('last')
    @UseGuards(AuthGuard)
    async getLastShavzakDay() {
        return await this.shavzakService.getLastShavzak();
    }

    @Get(':timestamp')
    @UseGuards(AuthGuard)
    async getShavzakDay(@Param() params: any) {
        const date = new Date(parseInt(params.timestamp));
        return await this.shavzakService.getForDate(date);
    }

    @Put()
    @UseGuards(AuthAdminGuard)
    async createOrUpdate(@Body() shavzakDay: CreateShavzakDto) {
        const shavzak = new ShavzakDay(new Date(shavzakDay.date), shavzakDay.missions);
        await this.shavzakService.create(shavzak);
    }
}

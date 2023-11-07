import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { ShavzakService } from './shavzak.service';
import { ShavzakDay } from './Shavzak';
import { CreateShavzakDto } from './CreateShavzakDto';

@Controller('shavzak')
export class ShavzakController {

    constructor(private shavzakService: ShavzakService)
    {}

    @Get(':timestamp')
    async getShavzakDay(@Param() params: any) {
        const date = new Date(parseInt(params.timestamp));
        return await this.shavzakService.getForDate(date);
    }

    @Put()
    async createOrUpdate(@Body() shavzakDay: CreateShavzakDto) {
        const shavzak = new ShavzakDay(new Date(shavzakDay.date), shavzakDay.missions);
        await this.shavzakService.create(shavzak);
    }
}

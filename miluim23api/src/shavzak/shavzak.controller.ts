import { Body, Controller, Get, Put } from '@nestjs/common';
import { ShavzakService } from './shavzak.service';
import { ShavzakDay } from './Shavzak';

@Controller('shavzak')
export class ShavzakController {

    constructor(private shavzakService: ShavzakService)
    {}

    @Get(':date')
    getShavzakDay() {
        return this.shavzakService   
    }

    @Put()
    createOrUpdate(@Body() shavzakDay: ShavzakDay) {
        this.shavzakService.create(shavzakDay);
    }
}

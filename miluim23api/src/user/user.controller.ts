import { Body, Controller, Get, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {
    }
    @Get()
    async getAll() {
        return this.userService.getAll()
    }
    @Put()
    async create(@Body() user: User) {
        console.log(user);
        await this.userService.create(user);
    }
}

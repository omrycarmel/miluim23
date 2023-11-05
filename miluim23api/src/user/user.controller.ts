import { Body, Controller, Get, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {
    }
    @Get()
    getAll() {
        return this.userService.getAll()
    }
    @Put()
    create(@Body() user: User) {
        this.userService.create(user);
    }
}

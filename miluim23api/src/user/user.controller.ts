import { Body, Controller, Get, Put, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user';
import { AuthAdminGuard } from 'src/guards/authadmin.guard';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {
    }
    @UseGuards(AuthGuard)
    @Get()
    async getAll() {
        return this.userService.getAll()
    }
    @Put()
    @UseGuards(AuthAdminGuard)
    async create(@Body() user: User) {
        console.log(user);
        await this.userService.create(user);
    }
}

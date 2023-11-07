import { Injectable } from '@nestjs/common';
import { User } from './user';
import { UserDbModel } from './user.dbmodel';
import { AppDataSource } from 'src/db/dbinit';
@Injectable()
export class UserService {
    private readonly repo = AppDataSource.getRepository(UserDbModel);
    constructor() {

    }
    async getAll(): Promise<User[]> {
        return await this.repo.find();
    }

    async create(user: User): Promise<void> {
        const model = new UserDbModel();
        model.name = user.name;
        model.phone = user.phone;
        model.privateNumber = user.privateNumber;
        await this.repo.save(model);
    }
}

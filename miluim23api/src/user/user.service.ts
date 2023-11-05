import { Injectable } from '@nestjs/common';
import { User } from './user';

@Injectable()
export class UserService {
    users: User[] = [
        new User('name1', 'phone1')
    ]
    getAll() {
        return this.users;
    }

    create(user: User) {
        this.users.push(user);
    }
}

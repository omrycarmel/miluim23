import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/entities/User';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() {
  }

  users = [
    new User(
      "name",
      "phone"
    ),
    new User(
      "name2",
      "phone2"
    )
  ]

  refreshDataEvent: BehaviorSubject<boolean> = new BehaviorSubject(true)

  getAll() {
    return this.users;
  }

  createUser(user: User) {
    this.users.push(user);
    this.refreshDataEvent.next(true)
  }
}

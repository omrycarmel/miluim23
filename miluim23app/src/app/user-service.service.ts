import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/entities/User';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(
    private httpClient: HttpClient,
    private config: ConfigService
  ) {
  }



  refreshDataEvent: BehaviorSubject<boolean> = new BehaviorSubject(true)

  getAll(): User[] {
    this.httpClient.get(this.config.apiBaseUrl + '/user').subscribe(o =>{
      console.log(o as any);
      return {}
    });
    return [];
  }

  createUser(user: User) {
    // this.users.push(user);
    this.refreshDataEvent.next(true)
  }
}

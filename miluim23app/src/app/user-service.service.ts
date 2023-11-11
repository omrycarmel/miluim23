import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map} from 'rxjs';
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

  getAll(): Observable<User[]> {
    return this.httpClient.get(this.config.apiBaseUrl + '/user')
    .pipe(map(o => o as User[]));
  }

  createUser(user: User): void {
    this.httpClient.put(this.config.apiBaseUrl + '/user', user)
    .subscribe(_ => this.refreshDataEvent.next(true));
  }
}

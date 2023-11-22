import { Injectable } from '@angular/core';
import { Mission } from './entities/Mission';
import { ShavzakDay } from './entities/ShavzakDay';
import { MissionAssignment } from './entities/MissionAssignment';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';
import { Observable, Observer, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShavzakService {

  constructor(
    private httpClient: HttpClient,
    private configService: ConfigService
  ) {
  }

  private deserializeDate(sd: ShavzakDay): ShavzakDay {
    const date = new Date(sd.date as unknown as string);
    return new ShavzakDay(date, sd.missions);
  }

  get(date: Date): Observable<ShavzakDay> {
    return this.httpClient.get(this.configService.apiBaseUrl + '/shavzak/' + date.getTime())
    .pipe(map(o => this.deserializeDate((o as ShavzakDay))));
  }

  getLast(): Observable<ShavzakDay> {
    return this.httpClient.get(this.configService.apiBaseUrl + '/shavzak/last')
    .pipe(map(o => this.deserializeDate((o as ShavzakDay))))  
  }
  save(shavzakDay: ShavzakDay): Observable<any> {
    return this.httpClient.put(this.configService.apiBaseUrl + '/shavzak', shavzakDay);
  }
}

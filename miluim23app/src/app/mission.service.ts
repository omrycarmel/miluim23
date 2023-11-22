import { Injectable } from '@angular/core';
import { Mission } from './entities/Mission';
import { Observable, map } from 'rxjs';
import { ConfigService } from './config.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MissionService {
  constructor(
    private configService: ConfigService,
    private httpClient: HttpClient,
  ) { }

  getAll(): Observable<Mission[]> {
    return this.httpClient.get(this.configService.apiBaseUrl + '/mission')
    .pipe(map(o => (o as Mission[])));
  }
}

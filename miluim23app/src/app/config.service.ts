import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() {}

  apiBaseUrl: string = 'http://localhost:3000';
}

import { Injectable } from '@angular/core';
import { Mission } from './entities/Mission';

@Injectable({
  providedIn: 'root'
})
export class MissionService {

  constructor() { }
  private amiad = new Mission(
    "amiad boker", 420, 900, false, []
  )

  getAll() {
    return [this.amiad];
  }
}

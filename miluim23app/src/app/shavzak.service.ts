import { Injectable } from '@angular/core';
import { Mission } from './entities/Mission';
import { ShavzakDay } from './entities/ShavzakDay';

@Injectable({
  providedIn: 'root'
})
export class ShavzakService {
  private amiad = new Mission(
    "amiad boker", 420, 900, false, ['random', '']
  )
  private shavzakDay: ShavzakDay = new ShavzakDay(
    [this.amiad] //new Map([["amiad boker", this.amiad]])
  )
  constructor() { }

  get() {
    return this.shavzakDay;
  }
  save(shavzakDay: ShavzakDay) {
    this.shavzakDay = shavzakDay;
  }
}

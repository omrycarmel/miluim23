import { Component, OnInit } from '@angular/core';
import { ShavzakDay } from '../entities/ShavzakDay';
import { ShavzakService } from '../shavzak.service';
import { UserServiceService } from '../user-service.service';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { User } from '../entities/User';
import { substractDaysFromDate } from '../utils/date-utils';

@Component({
  selector: 'app-shavzak',
  templateUrl: './shavzak.component.html',
  styleUrls: ['./shavzak.component.css']
})
export class ShavzakComponent implements OnInit {

  constructor(
    private shavzakService: ShavzakService,
    private userService: UserServiceService,
  )
  {}
  shavzak: ShavzakDay = new ShavzakDay(new Date(), []);
  users: User[] = [];

  ngOnInit(): void {
    const date = new Date();
    this.shavzakService.getLast().subscribe(sd => this.shavzak = sd);
    this.userService.getAll().subscribe(users => this.users = users);
  }

  getNameOfUserId(id: number): string {
    return this.users.find(u => u.privateNumber == id)?.name!;
  }
  loadPrevDay(): void {
    this.shavzakService.get(substractDaysFromDate(1, this.shavzak.date)).subscribe(sd => this.shavzak = sd);
  }

}

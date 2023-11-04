import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateUserFormComponent } from '../create-user-form/create-user-form.component';
import { UserServiceService } from '../user-service.service';
import { User } from 'src/app/entities/User';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  users: User[] = [];
  constructor(private matDialog: MatDialog, private userService: UserServiceService) {
    this.refreshUsers();
  }
  
  refreshUsers() {
    this.users = this.userService.getAll()

  }
  ngOnInit() {
    this.userService.refreshDataEvent.subscribe(v => {
      this.refreshUsers()
    })
  }

  createUserDialog() {
    this.matDialog.open(CreateUserFormComponent)
  }

}

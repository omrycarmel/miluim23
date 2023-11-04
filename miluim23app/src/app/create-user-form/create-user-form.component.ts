import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { UserServiceService } from '../user-service.service';
import { User } from 'src/app/entities/User';
@Component({
  selector: 'app-create-user-form',
  templateUrl: './create-user-form.component.html',
  styleUrls: ['./create-user-form.component.css']
})
export class CreateUserFormComponent  implements OnInit {
  createUserForm!: FormGroup

  constructor(private formBuilder: FormBuilder, private userService: UserServiceService)
  {}
  ngOnInit() {
    this.createUserForm = this.formBuilder.group({
      name: '',
      phone: ''
    })
  }

  onSubmit() {
    console.log(this.createUserForm.value)
    this.userService.createUser(
      new User(
        this.createUserForm.value.name,
        this.createUserForm.value.phone,
      )
    )
  }


}

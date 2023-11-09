import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserServiceService } from '../user-service.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit{
  
  formGroup!: FormGroup;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserServiceService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      username: '',
      password: ''
    })
  }
  submit(): void {
    const cred = this.formGroup.value;
    this.authService.setCredentials(cred.username, cred.password);
    this.userService.getAll();
    
  }
}

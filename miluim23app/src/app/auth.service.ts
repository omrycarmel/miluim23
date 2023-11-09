import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  
  user = "";
  password = "";

  getUser(): string {
    return this.user;
  }

  getAuthHeader(): string {
    const encoded = btoa(`${this.user}:${this.password}`);
    return "basic " + encoded;
  }

  hasCredentials(): boolean {
    return this.user != '' && this.password != '';
  }

  setCredentials(user: string, password: string) {
    this.user = user;
    this.password = password;
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  

  getUser(): string {
    return localStorage.getItem('user') ?? "";
  }
  private getPassowrd(): string {
    return localStorage.getItem('password') ?? '';
  }

  getAuthHeader(): string {
    const encoded = btoa(`${this.getUser()}:${this.getPassowrd()}`);
    return "basic " + encoded;
  }

  hasCredentials(): boolean {
    return this.getUser() != '' && this.getPassowrd() != '';
  }

  setCredentials(user: string, password: string) {
    localStorage.setItem('user', user);
    localStorage.setItem('password', password)
  }
}

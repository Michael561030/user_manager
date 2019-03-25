import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  private isUserLoggedIn;
  private email;
  constructor() {
    this.isUserLoggedIn = false;
  }
  setUserLoggesIn() {
    this.isUserLoggedIn = true;
  }
  getUserLoggedIn() {
    return this.isUserLoggedIn;
  }
}

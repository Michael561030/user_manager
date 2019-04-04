import { Injectable } from '@angular/core';
import {AppService} from './app.service';
import {User} from './models/user.model';


@Injectable()

export class GetUserByIdService {
  users: User[];
  constructor(private service: AppService) {
    this.users = this.service.users.slice();
  }

  getUser(id): User {
    let userId;
    this.service.users.findIndex(user => {
        if (user.id === id) {
          userId = user;
          return true;
        }
    });
    return userId;
  }
  editUser(user: User) {

    this.service.users = this.users.filter(u => u.id !== user.id).concat(user).sort((a, b) => {
      if (a.id < b.id) {
        return -1;
      }
      });
    console.log('User service: ', this.service.users);
  }
}

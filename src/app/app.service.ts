import {Injectable} from '@angular/core';
import {User} from './models/user.model';

@Injectable()
export class AppService {
  users: User[] = [{
    email: 'John@gmail.com',
    password: 'Qwerty123',
    firstname: 'John',
    lastname: 'Maccalister'
  },
    {
      email: 'Fredrick234@gmail.com',
      password: '1234567789qwerty',
      firstname: 'Fredrick',
      lastname: 'Calan'
    },
    {
      email: 'Mirta1391@yahoo.com',
      password: 'Sayanara66',
      firstname: 'Mirta',
      lastname: 'Fishgold'
    },
    {
      email: 'Roberto@yahoo.com',
      password: 'gRyejeUEdl',
      firstname: 'Robert',
      lastname: 'Lamberg'
    },
    {
      email: 'Kobalt72@gmail.com',
      password: 'OrpedlfEfd',
      firstname: 'Dan',
      lastname: 'Balan'
    },
    {
      email: 'Softgroup@gmail.com',
      password: 'softgroup2019',
      firstname: 'Our',
      lastname: 'Team'
    },
    {
      email: 'maxmiha221@gmail.com',
      password: 'Password123456',
      firstname: 'Michael',
      lastname: 'Maximjuk'
    },
  ];

  addUser(user: User) {
    this.users.push(user);
  }

  deleteUser(deleteUser) {
    const id = this.users.findIndex(user => {
      return user.email === deleteUser.email;
    });
    this.users.splice(id, 1); // filter
  }
}

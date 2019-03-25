import { Component, OnInit} from '@angular/core';
import { Router} from '@angular/router';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { AppService } from '../app.service';
import {User} from '../models/user.model';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  users: User[];
  constructor(private service: AppService, private router: Router) {
  }


  ngOnInit() {
    this.users = this.service.users;
  }
  signUp(): void {
    this.router.navigate(['admin/create_user']);
  }
  deleteUser(user) {
    this.service.deleteUser(user);
  }
}


import {Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';
import { AppService } from '../app.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  name = '';
  addForm: FormGroup;
  ngOnInit() {
    this.addForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required)
    });
    this.addForm.valueChanges.subscribe(() => {
      if (this.addForm.touched || this.addForm.dirty) {
      }
    });
  }
  constructor(private router: Router, private service: AppService) {}
  go_back() {
    this.router.navigate(['/admin']);
  }
  // add() {
  //   if (this.name) {
  //     this.service.addUser(this.name);
  //     this.name = '';
  //   }
  //
  // }
  addNewUser() {
    if (this.addForm.invalid) {
      return;
    }
    const user: User = {
      email: this.addForm.controls.email.value,
      password: this.addForm.controls.password.value,
      firstname: this.addForm.controls.firstName.value,
      lastname: this.addForm.controls.lastName.value
    };
    this.service.addUser(user);
    this.router.navigate(['/admin']);
    console.log(user);

  }
}




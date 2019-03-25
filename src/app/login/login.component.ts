import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../user.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private router: Router, private fb: FormBuilder, private userService: UserService) {
    // this.userService = userService;
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  loginUser() {
    const email = this.loginForm.controls.email.value;
    const password = this.loginForm.controls.password.value;
    if (( typeof (email) === 'string' && email.length > 3) && ( typeof (password) === 'string' && password.length > 5)) {
      this.userService.setUserLoggesIn();
      this.router.navigate(['admin']);
    }
  }

}

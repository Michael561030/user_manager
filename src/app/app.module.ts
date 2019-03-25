import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {ReactiveFormsModule} from '@angular/forms';
import {UserService} from './user.service';
import {AuthguardGuard} from './authguard.guard';
import {AppService} from './app.service';
import { NotFoundComponent } from './not-found/not-found.component';


const appRoutes = [
  {path: 'login', component: LoginComponent },
  {path: 'admin', canActivate: [AuthguardGuard], component: AdminComponent},
  {path: 'admin/create_user', component: SignUpComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    LoginComponent,
    SignUpComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [UserService, AuthguardGuard, AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }

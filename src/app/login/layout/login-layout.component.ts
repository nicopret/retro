import { Component } from '@angular/core';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login-layout',
  templateUrl: './login-layout.component.html',
  styleUrls: ['./login-layout.component.css']
})
export class LoginLayoutComponent {
  users;

  constructor(private loginService: LoginService) {
    this.loginService.getUsers().subscribe(users => this.users = users);
  }

  authUser(key) {
    this.loginService.authUser(key);
  }
}

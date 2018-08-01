import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../shared/providers/user/user.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  users;

  constructor(private router: Router, private userService: UserService) {
    this.userService.getUsers().subscribe(users => this.users = users);
    this.userService.isLoggedIn().subscribe(valid => {
      if (valid) {
        this.router.navigate(['feedback']);
      }
    });
  }

  authUser(key) {
    this.userService.setUser(key);
  }

  getUsers(): Observable<any[]> {
    return of (this.users);
  }
}

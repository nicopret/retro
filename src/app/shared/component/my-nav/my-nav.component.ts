import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import { UserService } from '../../providers/user/user.service';

@Component({
  selector: 'app-my-nav',
  templateUrl: './my-nav.component.html',
  styleUrls: ['./my-nav.component.css']
})
export class MyNavComponent implements OnInit {
  avatar;
  title;
  firstName;
  loggedIn: boolean;

  constructor(private route: ActivatedRoute,
    private userService: UserService) {
//    this.userService.getUser().subscribe(user => {
//      if (user.avatar) {
//        this.avatar = user.avatar;
//      }
//      this.firstName = user.firstName;
//    });
    this.userService.isLoggedIn().subscribe(loggedIn => this.loggedIn = loggedIn);
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

import { FeedbackService } from '../../service/feedback.service';

@Component({
  selector: 'app-feedback-navbar',
  templateUrl: './feedback-navbar.component.html',
  styleUrls: ['./feedback-navbar.component.css']
})
export class FeedbackNavbarComponent implements OnInit {
  user;

  constructor(private service: FeedbackService) {
  }

  ngOnInit() {
    this.service.getUser().subscribe(value => {
      this.user = value;
    });
    this.service.updateUser();
  }
}

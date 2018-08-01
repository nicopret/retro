import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../../service/feedback.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback-sidebar',
  templateUrl: './feedback-sidebar.component.html',
  styleUrls: ['./feedback-sidebar.component.css']
})
export class FeedbackSidebarComponent implements OnInit {
  retro: any;
  teamMembers: any[];
  user: any;

  constructor(private route: Router, private service: FeedbackService) {}

  ngOnInit() {
    this.service.getUser().subscribe(value => this.user = value);
    this.service.getTeamMembers().subscribe(value => this.teamMembers = value);
    this.service.getRetro().subscribe(value => this.retro = value);
    this.service.updateUser();
  }

  selectTeamMember(key: string) {
    this.route.navigate([`/feedback/evaluate/${key}`]);
  }

  selectRetro(key: string) {
    this.route.navigate([`/feedback/retro/${key}`]);
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FeedbackService } from '../../service/feedback.service';

@Component({
  selector: 'app-feedback-retro',
  templateUrl: './feedback-retro.component.html',
  styleUrls: ['./feedback-retro.component.css']
})
export class FeedbackRetroComponent implements OnInit {
  retro;

  constructor(private route: ActivatedRoute, private service: FeedbackService) {
    this.retro = {};
  }

  ngOnInit() {
    this.service.getRetroItem().subscribe(value => this.retro = value);
    this.route.params.subscribe(params => {
      this.service.setRetroItem(params.key);
    });
  }

  saveAnswer(text: string) {
    this.service.setAnswer(this.retro.key, text);
  }
}

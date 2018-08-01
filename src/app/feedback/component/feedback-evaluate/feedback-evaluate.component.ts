import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FeedbackService } from '../../service/feedback.service';

@Component({
  selector: 'app-feedback-evaluate',
  templateUrl: './feedback-evaluate.component.html',
  styleUrls: ['./feedback-evaluate.component.css']
})
export class FeedbackEvaluateComponent implements OnInit {
  metrics;
  user;

  constructor(private route: ActivatedRoute, private service: FeedbackService) {}

  ngOnInit() {
    this.service.getEvaluatedUser().subscribe(value => this.calculateMetrics(value));
    this.route.params.subscribe(params => this.service.setEvaluatedUser(params.key));
  }

  calculateMetrics(user) {
    this.user = user;
    this.metrics = this.service.getMetrics();
    if (user.metrics) {
      this.metrics = this.updateMetrics(user, this.metrics);
    }
  }

  selectOption(item: any) {
    this.service.setMetric(this.user.key, item.title, item.value);
  }

  updateMetrics(user, metrics) {
    for (const [key, value] of Object.entries(user.metrics)) {
      metrics.find(item => item.metric === key).value = value;
    }
    return metrics;
  }

}

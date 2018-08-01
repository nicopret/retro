import { Injectable } from '@angular/core';

import { UserService } from '../../shared/providers/user/user.service';
import { Observable, Subject } from 'rxjs';
import { MetricService } from '../../shared/providers/metric/metric.service';
import { RetroService } from '../../shared/providers/retro/retro.service';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  evaluatedUser = new Subject<any>();
  retro = new Subject<any>();
  retroStatus = new Subject<any>();
  teamMembers = new Subject<any[]>();
  user = new Subject<any>();

  constructor(private metricService: MetricService, private retroService: RetroService, private userService: UserService) {
    this.userService.getEvaluatedUser().subscribe(value => this.evaluatedUser.next(value));
    this.userService.getRetro().subscribe(value => this.retro.next(value));
    this.userService.getRetroStatus().subscribe(value => this.retroStatus.next(value));
    this.userService.getTeamMembers().subscribe(value => this.teamMembers.next(value));
    this.userService.getUser().subscribe(value => this.user.next(value));
  }

  getEvaluatedUser(): Observable<any> {
    return (this.evaluatedUser);
  }

  getMetrics() {
    return this.metricService.getMetrics();
  }

  getRetro() {
    return this.retroStatus;
  }

  getRetroItem(): Observable<any> {
    return this.retro;
  }

  getTeamMembers() {
    return (this.teamMembers);
  }

  getUser(): Observable<any> {
    return (this.user);
  }

  setAnswer(key, answer) {
    this.userService.setAnswer(key, answer);
  }

  setEvaluatedUser(key) {
    this.userService.setEvaluatedUser(key);
  }

  setMetric(key, metric, option) {
    this.userService.setMetric(key, metric, option);
  }

  setRetroItem(key) {
    this.userService.setRetroItem(key);
  }

  updateUser() {
    this.userService.updateUser();
  }
}

import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';

import { MetricService } from '../metric/metric.service';
import { RetroService } from '../retro/retro.service';

const USERS = [
  {
    key: 'albertam',
    firstName: 'Alberta',
    lastName: 'Medhurst',
    role: 'Test Analyst',
    sprint: 'Pennsylvania',
    teamName: 'Tuvalu'
  },
  {
    avatar: 'assets/avatar1.jpg',
    key: 'renes',
    firstName: 'Rene',
    lastName: 'Sporer',
    role: 'Back end developer',
    sprint: 'Pennsylvania',
    teamName: 'Tuvalu'
  },
  {
    key: 'salliek',
    firstName: 'Sallie',
    lastName: 'Kris',
    role: 'Front end developer',
    sprint: 'Pennsylvania',
    teamName: 'Tuvalu'
  },
  {
    key: 'tinniew',
    firstName: 'Tinnie',
    lastName: 'Wick',
    role: 'Business analyst',
    sprint: 'Pennsylvania',
    teamName: 'Tuvalu'
  }
];

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentKey;
  currentUser: any;
  evaluateUser = new Subject<any>();
  loggedIn = new Subject<boolean>();
  retro = new Subject<any>();
  retroStatus = new Subject<any>();
  teamMembers = new Subject<any[]>();
  teamName = new Subject<string>();
  user = new Subject<any>();

  constructor(private metricService: MetricService, private retroService: RetroService) {
    this.loggedIn.next(false);
  }

  getEvaluatedUser(): Observable<any> {
    return this.evaluateUser;
  }

  getRetro(): Observable<any> {
    return this.retro;
  }

  getRetroStatus() {
    return this.retroStatus;
  }

  getTeamMembers(): Observable<any[]> {
    return this.teamMembers.asObservable();
  }

  getUser(): Observable<any> {
    return (this.user);
  }

  getUsers(): Observable<any[]> {
    return of (USERS.map(user => {
      return {
        key: user.key,
        name: user.firstName + ' ' + user.lastName
      };
    }));
  }

  isLoggedIn(): Observable<boolean> {
    return (this.loggedIn);
  }

  setAnswer(key, answer) {
    if (!this.currentUser['feedback']) {
      this.currentUser['feedback'] = {};
    }
    if (!this.currentUser.feedback[key]) {
      this.currentUser.feedback[key] = [];
    }
    this.currentUser.feedback[key].push(answer);

    const item = this.retroService.getRetroItem(key);
    item.answers = this.currentUser.feedback && this.currentUser.feedback[key] ? this.currentUser.feedback[key] : [];
    this.retro.next(item);

    this.setRetroStatus();
  }

  setMetric(key, metric, option) {
    const item = USERS.find(user => user.key === this.currentKey);
    if (!item['metrics'])  {
      item['metrics'] = {};
    }
    if (!item['metrics'][key]) {
      item['metrics'][key] = {};
    }
    item['metrics'][key][metric] = option;
    this.setTeamMembers();
  }

  setEvaluatedUser(key) {
    const tempUser = USERS.find(item => item.key === key);
    this.evaluateUser.next({
      key,
      metrics: this.currentUser.metrics && this.currentUser.metrics[key] ? this.currentUser.metrics[key] : null,
      name: tempUser ? `${tempUser.firstName} ${tempUser.lastName}` : ''
    });
  }

  setRetroItem(key) {
    const item = this.retroService.getRetroItem(key);
    item.answers = this.currentUser.feedback && this.currentUser.feedback[key] ? this.currentUser.feedback[key] : [];
    this.retro.next(item);
  }

  setRetroStatus() {
    const item = this.retroService.getRetro();
    item.questions.forEach(prop => {
      prop.selected = this.currentUser.feedback && this.currentUser.feedback[prop.key] ?
        this.currentUser.feedback[prop.key].length >= prop.required : false;
    });
    this.retroStatus.next(item);
  }

  setTeamMembers() {
    this.teamMembers.next(this.currentUser && this.currentUser.key ?
        USERS.filter(member => member.key !== this.currentUser.key).map(member => {
      let complete = this.currentUser.metrics && this.currentUser.metrics[member.key];
      if (complete) {
        complete = this.metricService.getCount() === Object.keys(this.currentUser.metrics[member.key]).length;
      }
      return {
        key: member.key,
        selected: complete,
        value: `${member.firstName} ${member.lastName}`
      };
    }).sort((a, b) => a.key > b.key ? 1 : a.key < b.key ? -1 : 0) : []);
  }

  setUser(key) {
    this.currentUser = USERS.find(user => user.key === key);
    this.currentKey = key;
    this.loggedIn.next(this.currentUser ? true : false);
    this.user.next(this.currentUser);
    this.setTeamMembers();
  }

  updateUser() {
    this.setUser(this.currentKey ? this.currentKey : 'renes');
    this.setRetroStatus();
  }
}

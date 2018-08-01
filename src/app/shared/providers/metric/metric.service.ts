import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

const METRICS = [
  {
    metric: 'Communication',
    value: -1,
    options: [{ label: 'Very poor', score: 0 },
      { label: 'Poor', score: 1 },
      { label: 'Good', score: 2 },
      { label: 'Very good', score: 3 },
      { label: 'Excellent', score: 4 }
    ]
  },
  {
    metric: 'Leadership',
    value: -1,
    options: [{ label: 'Hitler', score: 0 },
      { label: 'Pope John', score: 3 },
      { label: 'Ghandi', score: 5 }
    ]
  },
  {
    metric: 'Quality',
    value: -1,
    options: [{ label: 'Please no', score: 0 },
        { label: 'Go learn', score: 1 },
        { label: 'Passable', score: 2 },
        { label: 'Expected', score: 3 },
        { label: 'Very good', score: 4 },
        { label: 'My yen master', score: 5 }
    ]
  }
];

@Injectable({
  providedIn: 'root'
})
export class MetricService {

  constructor() { }

  getCount() {
    return METRICS.length;
  }

  getMetrics() {
    return JSON.parse(JSON.stringify(METRICS));
  }

}

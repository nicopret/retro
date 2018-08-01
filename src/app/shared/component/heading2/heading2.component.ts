import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heading2',
  templateUrl: './heading2.component.html',
  styleUrls: ['./heading2.component.css']
})
export class Heading2Component {
  @Input() text: string;

  constructor() {}

}

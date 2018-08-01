import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heading3',
  templateUrl: './heading3.component.html',
  styleUrls: ['./heading3.component.css']
})
export class Heading3Component {
  @Input() text;

  constructor() { }

}

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-list-radio',
  templateUrl: './card-list-radio.component.html',
  styleUrls: ['./card-list-radio.component.css']
})
export class CardListRadioComponent {
  @Input() index;
  @Input() options;
  @Input() title;
  @Input() value;
  @Output() select = new EventEmitter<any>();

  constructor() {}

  selectItem(value) {
    this.value = value;
    this.select.emit({title: this.title, value});
  }
}

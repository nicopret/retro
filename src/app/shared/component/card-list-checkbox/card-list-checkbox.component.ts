import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-list-checkbox',
  templateUrl: './card-list-checkbox.component.html',
  styleUrls: ['./card-list-checkbox.component.css']
})
export class CardListCheckboxComponent {
  @Input() description;
  @Input() list;
  @Input() title;
  @Output() select = new EventEmitter<any>();

  constructor() { }

  selectItem(key) {
    this.select.emit(key);
  }
}

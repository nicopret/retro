import { Component, EventEmitter, Input, Output } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css']
})
export class TextareaComponent {
  @Input() text;
  @Output() value = new EventEmitter<any>();

  constructor() { }

  save() {
    this.value.emit(this.text);
    this.text = '';
  }
}

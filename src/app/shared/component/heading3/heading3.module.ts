import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Heading3Component } from './heading3.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Heading3Component],
  exports: [ Heading3Component ]
})
export class Heading3Module { }

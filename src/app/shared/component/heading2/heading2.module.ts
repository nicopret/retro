import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Heading2Component } from './heading2.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ Heading2Component ],
  exports: [ Heading2Component ]
})
export class Heading2Module {}

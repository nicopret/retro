import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardListCheckboxComponent } from './card-list-checkbox.component';
import { MaterialModule } from '../../modules/material/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [ CardListCheckboxComponent ],
  exports: [ CardListCheckboxComponent ]
})
export class CardListCheckboxModule { }

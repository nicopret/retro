import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardListRadioComponent } from './card-list-radio.component';
import { MaterialModule } from '../../modules/material/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [ CardListRadioComponent ],
  exports: [ CardListRadioComponent ]
})
export class CardListRadioModule { }

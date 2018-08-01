import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FeedbackRoutes } from './feedback-routing.module';
import { FeedbackEvaluateComponent } from './component/feedback-evaluate/feedback-evaluate.component';
import { FeedbackContentComponent } from './component/feedback-content/feedback-content.component';

import { CardListCheckboxModule } from '../shared/component/card-list-checkbox/card-list-checkbox.module';
import { Heading2Module } from '../shared/component/heading2/heading2.module';
import { Heading3Module } from '../shared/component/heading3/heading3.module';
import { MaterialModule } from '../shared/modules/material/material.module';
import { CardListRadioModule } from '../shared/component/card-list-radio/card-list-radio.module';
import { FeedbackRetroComponent } from './component/feedback-retro/feedback-retro.component';
import { TextareaModule } from '../shared/component/textarea/textarea.module';

@NgModule({
  imports: [
    CommonModule,
    CardListCheckboxModule,
    CardListRadioModule,
    FormsModule,
    Heading2Module,
    Heading3Module,
    MaterialModule,
    ReactiveFormsModule,
    TextareaModule,
    RouterModule.forChild(FeedbackRoutes)
  ],
  declarations: [ FeedbackContentComponent, FeedbackEvaluateComponent, FeedbackRetroComponent ]
})
export class FeedbackModule { }

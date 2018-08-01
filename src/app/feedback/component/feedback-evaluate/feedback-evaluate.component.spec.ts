import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { FeedbackEvaluateComponent } from './feedback-evaluate.component';
import { Heading3Module } from '../../../shared/component/heading3/heading3.module';
import { CardListRadioModule } from '../../../shared/component/card-list-radio/card-list-radio.module';

describe('FeedbackEvaluateComponent', () => {
  let component: FeedbackEvaluateComponent;
  let fixture: ComponentFixture<FeedbackEvaluateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackEvaluateComponent ],
      imports: [ CardListRadioModule, Heading3Module, RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackEvaluateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

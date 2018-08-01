import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { FeedbackRetroComponent } from './feedback-retro.component';
import { Heading3Module } from '../../../shared/component/heading3/heading3.module';
import { TextareaModule } from '../../../shared/component/textarea/textarea.module';

describe('FeedbackRetroComponent', () => {
  let component: FeedbackRetroComponent;
  let fixture: ComponentFixture<FeedbackRetroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackRetroComponent ],
      imports: [ Heading3Module, RouterTestingModule, TextareaModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackRetroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

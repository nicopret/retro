import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { FeedbackSidebarComponent } from './feedback-sidebar.component';

import { Heading3Module } from '../../../shared/component/heading3/heading3.module';
import { MaterialModule } from '../../../shared/modules/material/material.module';
import { CardListCheckboxModule } from '../../../shared/component/card-list-checkbox/card-list-checkbox.module';

describe('FeedbackSidebarComponent', () => {
  let component: FeedbackSidebarComponent;
  let fixture: ComponentFixture<FeedbackSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackSidebarComponent ],
      imports: [ BrowserAnimationsModule, CardListCheckboxModule, Heading3Module, MaterialModule, RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

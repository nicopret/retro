import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { FeedbackLayoutComponent } from './feedback-layout.component';
import { FeedbackNavbarComponent } from '../component/feedback-navbar/feedback-navbar.component';
import { FeedbackSidebarComponent } from '../component/feedback-sidebar/feedback-sidebar.component';

import { AvatarModule } from '../../shared/component/avatar/avatar.module';
import { Heading2Module } from '../../shared/component/heading2/heading2.module';
import { MaterialModule } from '../../shared/modules/material/material.module';
import { Heading3Module } from '../../shared/component/heading3/heading3.module';
import { CardListRadioModule } from '../../shared/component/card-list-radio/card-list-radio.module';
import { CardListCheckboxModule } from '../../shared/component/card-list-checkbox/card-list-checkbox.module';

describe('FeedbackLayoutComponent', () => {
  let component: FeedbackLayoutComponent;
  let fixture: ComponentFixture<FeedbackLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FeedbackLayoutComponent,
        FeedbackNavbarComponent,
        FeedbackSidebarComponent
      ],
      imports: [
        AvatarModule,
        BrowserAnimationsModule,
        CardListCheckboxModule,
        CardListRadioModule,
        Heading2Module,
        Heading3Module,
        MaterialModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

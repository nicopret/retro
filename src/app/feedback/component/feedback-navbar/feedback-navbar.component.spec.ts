import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackNavbarComponent } from './feedback-navbar.component';

import { AvatarModule } from '../../../shared/component/avatar/avatar.module';
import { Heading2Module } from '../../../shared/component/heading2/heading2.module';
import { MaterialModule } from '../../../shared/modules/material/material.module';

describe('FeedbackNavbarComponent', () => {
  let component: FeedbackNavbarComponent;
  let fixture: ComponentFixture<FeedbackNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackNavbarComponent ],
      imports: [ AvatarModule, Heading2Module, MaterialModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

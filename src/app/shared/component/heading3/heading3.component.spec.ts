import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Heading3Component } from './heading3.component';

describe('Heading3Component', () => {
  let component: Heading3Component;
  let fixture: ComponentFixture<Heading3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Heading3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Heading3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

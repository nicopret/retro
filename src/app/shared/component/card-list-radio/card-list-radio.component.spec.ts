import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListRadioComponent } from './card-list-radio.component';
import { MaterialModule } from '../../modules/material/material.module';

describe('CardListRadioComponent', () => {
  let component: CardListRadioComponent;
  let fixture: ComponentFixture<CardListRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardListRadioComponent ],
      imports: [ MaterialModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardListRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

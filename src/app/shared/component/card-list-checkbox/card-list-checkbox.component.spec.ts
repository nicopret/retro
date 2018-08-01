import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListCheckboxComponent } from './card-list-checkbox.component';
import { MaterialModule } from '../../modules/material/material.module';

describe('CardListCheckboxComponent', () => {
  let component: CardListCheckboxComponent;
  let fixture: ComponentFixture<CardListCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardListCheckboxComponent ],
      imports: [ MaterialModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardListCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { OverlayModule } from '@angular/cdk/overlay';
import { FormsModule } from '@angular/forms';
import { MatIcon, MatMenu, MatMenuTrigger, MatToolbar } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';

import { MyNavComponent } from './my-nav.component';
import { AvatarComponent } from '../avatar/avatar.component';

describe('HomeComponent', () => {
  let component: MyNavComponent;
  let fixture: ComponentFixture<MyNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AvatarComponent, MatIcon, MatToolbar, MatMenu, MatMenuTrigger, MyNavComponent ],
      imports: [ FormsModule, OverlayModule, RouterTestingModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});

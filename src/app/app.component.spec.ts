import { TestBed, async } from '@angular/core/testing';
import { OverlayModule } from '@angular/cdk/overlay';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';

import { AvatarComponent } from './shared/component/avatar/avatar.component';
import { MyNavComponent } from './shared/component/my-nav/my-nav.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, AvatarComponent, MyNavComponent
      ],
      imports: [ OverlayModule, RouterTestingModule ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});

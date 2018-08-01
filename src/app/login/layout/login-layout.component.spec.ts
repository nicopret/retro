import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginLayoutComponent } from './login-layout.component';

describe('LoginLayoutComponent', () => {
  let component: LoginLayoutComponent;
  let fixture: ComponentFixture<LoginLayoutComponent>;
  let h1: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginLayoutComponent ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginLayoutComponent);
    component = fixture.componentInstance;
    h1 = fixture.nativeElement.querySelector('h1');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('displaying the login heading', () => {
    fixture.detectChanges();
    expect(h1.textContent).toContain('Login');
  });

});

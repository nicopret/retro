import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FeedbackLayoutComponent } from './feedback/feedback-layout/feedback-layout.component';
import { LoginLayoutComponent } from './login/layout/login-layout.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginLayoutComponent},
  {
    path: 'feedback',
    component: FeedbackLayoutComponent,
    children: [{
      path: '',
      loadChildren: './feedback/feedback.module#FeedbackModule'
    }]
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login'},
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(appRoutes)]
})
export class AppRoutingModule { }

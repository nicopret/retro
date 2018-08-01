import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './shared/component/my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';

import { AppRoutingModule } from './app-routing.module';
import { AvatarComponent } from './shared/component/avatar/avatar.component';
import { LoginLayoutComponent } from './login/layout/login-layout.component';
import { FeedbackLayoutComponent } from './feedback/feedback-layout/feedback-layout.component';
import { FeedbackNavbarComponent } from './feedback/component/feedback-navbar/feedback-navbar.component';
import { FeedbackSidebarComponent } from './feedback/component/feedback-sidebar/feedback-sidebar.component';

import { CardListCheckboxModule } from './shared/component/card-list-checkbox/card-list-checkbox.module';
import { MaterialModule } from './shared/modules/material/material.module';
import { Heading2Module } from './shared/component/heading2/heading2.module';
import { Heading3Module } from './shared/component/heading3/heading3.module';

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    AvatarComponent,
    LoginLayoutComponent,
    FeedbackLayoutComponent,
    FeedbackNavbarComponent,
    FeedbackSidebarComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CardListCheckboxModule,
    FormsModule,
    Heading2Module,
    Heading3Module,
    LayoutModule,
    MaterialModule,
    AppRoutingModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [],
})
export class AppModule { }

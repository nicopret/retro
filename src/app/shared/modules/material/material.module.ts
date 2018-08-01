import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatSidenav,
  MatSidenavContainer,
  MatSidenavContent,
  MatToolbar,
  MatCard,
  MatCardHeader,
  MatCardTitle,
  MatCardContent
} from '@angular/material';

@NgModule({
  exports: [
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    MatSidenav,
    MatSidenavContainer,
    MatSidenavContent,
    MatToolbar
  ],
  imports: [
    CommonModule
  ],
  declarations: [
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    MatSidenav,
    MatSidenavContainer,
    MatSidenavContent,
    MatToolbar
  ]
})
export class MaterialModule { }

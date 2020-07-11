import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    LayoutComponent,
    HeaderComponent
  ],
  exports : [
    LayoutComponent,
    HeaderComponent        
  ]
})
export class LayoutModule { }
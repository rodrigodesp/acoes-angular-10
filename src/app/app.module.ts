import { BrowserModule } from '@angular/platform-browser';

/* Routing */
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

/* Angular Material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

/* FormsModule */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Angular Flex Layout */
import { FlexLayoutModule } from "@angular/flex-layout";

import { LayoutModule } from './layout/layout.module';

/* Components */
//import { LogInComponent } from './components/log-in/log-in.component';
//import { RegisterComponent } from './components/register/register.component';
//import { LancamentoComponent } from './components/lancamento/lancamento.component';
//import { LayoutComponent } from './layout/layout.component';
//import { LayoutModule } from '@angular/cdk/layout';


@NgModule({
  declarations: [
    AppComponent
    //LogInComponent,
    //RegisterComponent,
    //LogInComponent,
    //LancamentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

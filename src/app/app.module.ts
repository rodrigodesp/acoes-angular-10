import { BrowserModule } from '@angular/platform-browser';

/* Routing */
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/shared.module';

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
    SharedModule.forRoot(),
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

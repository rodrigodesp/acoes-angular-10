import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { LogInComponent } from './components/log-in/log-in.component';
//import { RegisterComponent } from './components/register/register.component';
//import { LancamentoComponent } from './components/lancamento/lancamento.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'layout' },
  //{ path: 'login', component: LogInComponent },
  //{ path: 'register', component: RegisterComponent },
  //{ path: 'lancamento', component: LancamentoComponent },
  { path: 'layout', component: LayoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

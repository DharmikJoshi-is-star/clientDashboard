import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Login2Component } from './login2/login2.component';
import { LogoutComponent } from './logout/logout.component';


const routes: Routes = [
  {path:'login',component:Login2Component},
  {path:'logout',component:LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

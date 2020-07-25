import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleHomeComponent } from './role-home/role-home.component';


const routes: Routes = [
  {path:'',component:RoleHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleRoutingModule { }

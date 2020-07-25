import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MailHomeComponent } from './mail-home/mail-home.component';


const routes: Routes = [
  {path:'',component:MailHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MailRoutingModule { }

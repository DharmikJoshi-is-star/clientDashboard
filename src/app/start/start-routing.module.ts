import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartHomeComponent } from './start-home/start-home.component';
import { CreateCompanyComponent } from './create-company/create-company.component';
import { ChooseServiceComponent } from './choose-service/choose-service.component';


const routes: Routes = [
  {
    path: '', component: StartHomeComponent,
    children: [
      {path:'',component:ChooseServiceComponent},
      {path:'company-create/:usage',component:CreateCompanyComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StartRoutingModule { }

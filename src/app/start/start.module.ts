import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StartRoutingModule } from './start-routing.module';
import { StartHomeComponent } from './start-home/start-home.component';
import { FuseSharedModule } from '@fuse/shared.module';
import { CreateCompanyComponent } from './create-company/create-company.component';
import { ChooseServiceComponent } from './choose-service/choose-service.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [StartHomeComponent, CreateCompanyComponent, ChooseServiceComponent],
  imports: [
    CommonModule,
    StartRoutingModule,
    FuseSharedModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ]
})
export class StartModule { }

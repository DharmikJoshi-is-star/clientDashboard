import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleRoutingModule } from './role-routing.module';
import { RoleHomeComponent } from './role-home/role-home.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatStepperModule} from '@angular/material/stepper';
import { FuseSharedModule } from '@fuse/shared.module';


@NgModule({
  declarations: [RoleHomeComponent],
  imports: [
    CommonModule,
    RoleRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatStepperModule,
    FuseSharedModule
  ]
})
export class RoleModule { }

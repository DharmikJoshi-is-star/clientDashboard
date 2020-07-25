import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorsRoutingModule } from './errors-routing.module';
import { Error404Component } from './error404/error404.component';
import { FuseSharedModule } from '@fuse/shared.module';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [Error404Component],
  imports: [
    CommonModule,
    ErrorsRoutingModule,
    FuseSharedModule,
    MatIconModule
  ]
})
export class ErrorsModule { }

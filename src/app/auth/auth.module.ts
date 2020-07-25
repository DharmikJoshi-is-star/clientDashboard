import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AuthRoutingModule } from './auth-routing.module';
import { Login2Component } from './login2/login2.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FuseSharedModule } from '@fuse/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { LogoutComponent } from './logout/logout.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [Login2Component, LogoutComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    FuseSharedModule,
    MatIconModule,
    MatProgressSpinnerModule
  ]
})
export class AuthModule { }

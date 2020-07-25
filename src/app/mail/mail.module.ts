import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MailRoutingModule } from './mail-routing.module';
import { MailHomeComponent } from './mail-home/mail-home.component';


@NgModule({
  declarations: [MailHomeComponent],
  imports: [
    CommonModule,
    MailRoutingModule
  ]
})
export class MailModule { }

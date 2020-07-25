import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { fuseAnimations } from '@fuse/animations';
import { FuseConfigService } from '@fuse/services/config.service';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.scss'],
  animations:fuseAnimations
})
export class CreateCompanyComponent implements OnInit {

  companyForm=new FormGroup({
    name:new FormControl('')
  })
  constructor(private _fuseConfigService: FuseConfigService) {
    this._fuseConfigService.config = {
      layout: {
          navbar   : {
              hidden: true
          },
          toolbar  : {
              hidden: true
          },
          footer   : {
              hidden: true
          },
          sidepanel: {
              hidden: true
          }
      }
  };
   }

  ngOnInit(): void {
  }

}

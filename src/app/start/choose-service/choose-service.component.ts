import { Component, OnInit } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { FuseConfigService } from '@fuse/services/config.service';

@Component({
  selector: 'app-choose-service',
  templateUrl: './choose-service.component.html',
  styleUrls: ['./choose-service.component.scss'],
  animations:fuseAnimations
})
export class ChooseServiceComponent implements OnInit {

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

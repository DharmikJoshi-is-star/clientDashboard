import { Component, OnInit } from '@angular/core';
import { FuseConfigService } from '@fuse/services/config.service';

@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error-404.component.scss']
})
export class Error404Component implements OnInit {
/**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     */
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

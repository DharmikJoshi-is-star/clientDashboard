import { Component, OnInit } from '@angular/core';
import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';

@Component({
  selector: 'app-start-home',
  templateUrl: './start-home.component.html',
  styleUrls: ['./start-home.component.scss'],
  animations:fuseAnimations
})
export class StartHomeComponent implements OnInit {

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

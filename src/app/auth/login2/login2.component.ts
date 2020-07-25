import { Component, OnInit } from '@angular/core';

import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.scss'],
  animations:fuseAnimations
})
export class Login2Component implements OnInit {


   /**
     * Constructor
     * @author Riki Jha
     * @param {FuseConfigService} _fuseConfigService
     * @param {FormBuilder} _formBuilder
     */

     loginForm=new FormGroup({
       username:new FormControl('',[Validators.required]),
       password:new FormControl('',[Validators.required])
     })



  constructor( private _fuseConfigService: FuseConfigService,private authService:AuthService,private router:Router) {
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

  onSubmit(){
    if(this.loginForm.invalid){
      return
    }
    this.authService.login(this.loginForm.value).subscribe({
      next:()=>{
        this.router.navigateByUrl('/dashboard')
      },
      error:(err)=>{
           if(err.error_description==='Bad credentials'){
             this.loginForm.setErrors({credentials:true});
           }
      }
    })
  }

}

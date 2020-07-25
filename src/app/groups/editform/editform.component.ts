// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-editform',
//   templateUrl: './editform.component.html',
//   styleUrls: ['./editform.component.scss']
// })
// export class EditformComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { GroupService } from "../group.service";
import { Router, ActivatedRoute } from "@angular/router";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
    selector: "app-editform",
    templateUrl: "./editform.component.html",
    styleUrls: ["./editform.component.scss"],
})
export class EditformComponent implements OnInit {
    groupForm = new FormGroup({
        name: new FormControl("", [
            Validators.required,
            Validators.pattern("[a-zA-Z0-9- ]*"),
        ]),
    });
    constructor(
        public httpclient: HttpClient,
        public groupservice: GroupService,
        public router: Router,
        // public dialogref: MatDialogRef<EditformComponent>,
        public activatedRoute: ActivatedRoute
    ) {}

    ngOnInit(): void {
        // this.activatedRoute.params.subscribe((res) => {
        //     console.log(res);
        // });
    }

    onSubmit() {
        if (this.groupForm.invalid) {
            return;
        }
        this.groupservice.addGroup(this.groupForm.value).subscribe({
            next: () => {
                // this.router
                //     .navigateByUrl("/", { skipLocationChange: true })
                //     .then(() => {
                this.router.navigateByUrl("/groups");
            },
            //this.router.navigateByUrl("/groups");

            error: (err) => {
                console.log(err.error_description);
            },
            complete: () => {
                console.log("added succesfully");
            },
        });
        // this.dialogref.close();
        //console.log(this.groupForm.get("name").value);
    }
    back() {
        this.router.navigateByUrl("/groups");
    }
}

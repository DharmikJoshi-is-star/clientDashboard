// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-eform',
//   templateUrl: './eform.component.html',
//   styleUrls: ['./eform.component.scss']
// })
// export class EformComponent implements OnInit {

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
import { group } from "console";
import { id } from "@swimlane/ngx-datatable";

@Component({
    selector: "app-eform",
    templateUrl: "./eform.component.html",
    styleUrls: ["./eform.component.scss"],
})
export class EformComponent implements OnInit {
    constructor(
        public httpclient: HttpClient,
        public groupservice: GroupService,
        public router: Router, // public dialogref: MatDialogRef<EformComponent>,
        public activatedRoute: ActivatedRoute
    ) {
        let id: Number;
    }
    groupFormm = this.groupservice.form;

    ngOnInit(): void {
        this.activatedRoute.data.subscribe((res) => {
            console.log(res.group.group);
        });
        // let id = this.activatedRoute.snapshot.data["group"].group.id;
        // const {id}= this.activatedRoute.params;
        // console.log(id);
        //this.groupFormm.setValue(this.groupservice.gname);
        // this.groupFormm.controls["name"].setValue(this.groupservice.gname);
        this.groupFormm.controls["name"].setValue(
            this.activatedRoute.snapshot.data.group.group.name
        );
        // this.groupFormm.setValue(this.groupservice.gname);
        // console.log(this.groupservice.gname);
    }

    onSubmit() {
        this.groupFormm.controls["name"].setValue(this.groupFormm.value.name);
        this.groupFormm.controls["id"].setValue(
            this.activatedRoute.snapshot.data["group"].group.id
        );

        if (this.groupFormm.invalid) {
            return;
        } else {
            console.log(this.groupFormm.value);
            this.groupservice.editGroup(this.groupFormm.value).subscribe({
                // next: () => {
                //     {
                //         this.groupservice.gname = "";
                //         this.router
                //             .navigateByUrl("/", { skipLocationChange: true })
                //             .then(() => {
                //                 this.router.navigate(["/groups"]);
                //             });
                //     }
                // },
                next: () => {
                    {
                        //this.groupservice.gname = "";
                        // this.router
                        //     .navigateByUrl("/", { skipLocationChange: true })
                        //     .then(() => {
                        this.router.navigate(["/groups"]);
                        //});
                    }
                },
                complete: () => {
                    console.log("ediited succesfully");
                },
            });
            // this.groupservice.addGroup(this.groupFormm.value).subscribe({
            //     next: () => {
            //         this.router.navigateByUrl("/groups");
            //     },
            //     error: (err) => {
            //         console.log(err.error_description);
            //     },
            //     complete: () => {
            //         console.log("added succesfully");
            //     },
            // });
            //console.log(this.groupForm.get("name").value);
        }
        //this.dialogref.close();
    }

    onEdit(name: String) {
        if (this.groupFormm.invalid) {
            return;
        } else {
            console.log(this.groupFormm.value);
            this.groupservice.editGroup(this.groupFormm.value).subscribe({
                next: () => {
                    {
                        this.groupservice.gname = "";
                        // this.router
                        //     .navigateByUrl("/", { skipLocationChange: true })
                        //     .then(() => {
                        this.router.navigate(["/groups"]);
                        //});
                    }
                },
            });
        }
    }

    cancel() {
        this.router.navigateByUrl("/groups");
    }
}

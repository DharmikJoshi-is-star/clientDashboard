import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { GroupService } from "../group.service";
import { Router } from "@angular/router";
import { MatDialogConfig } from "@angular/material/dialog";
import { MatDialog } from "@angular/material/dialog";
@Component({
    selector: "app-create-group",
    templateUrl: "./create-group.component.html",
    styleUrls: ["./create-group.component.scss"],
})
export class CreateGroupComponent implements OnInit {
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
        public dialog: MatDialog
    ) {}

    ngOnInit(): void {}

    onSubmit() {
        if (this.groupForm.invalid) {
            return;
        }
        this.groupservice.addGroup(this.groupForm.value).subscribe({
            next: () => {
                this.router.navigateByUrl("/groups");
            },
            error: (err) => {
                console.log(err.error_description);
            },
            complete: () => {
                console.log("added succesfully");
            },
        });
        //console.log(this.groupForm.get("name").value);
    }
}

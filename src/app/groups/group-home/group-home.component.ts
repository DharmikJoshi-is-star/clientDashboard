import { Component, OnDestroy, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { Router } from "@angular/router";
import { Group } from "app/model/group";
import { GroupService } from "../group.service";

import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { EditformComponent } from "../editform/editform.component";
import { EformComponent } from "../eform/eform.component";

@Component({
    selector: "app-group-home",
    templateUrl: "./group-home.component.html",
    styleUrls: ["./group-home.component.scss"],
})
export class GroupHomeComponent implements OnInit {
    rows: Group[];
    rootUrl = "http://localhost:8081";
    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(
        private _httpClient: HttpClient,
        public router: Router,
        public groupservice: GroupService,
        public dialog: MatDialog
    ) {}

    ngOnInit(): void {
        this.groupservice.getAllGroups().subscribe((group: Group[]) => {
            this.rows = group;
        });
    }

    // createGroup() {
    //     this.router.navigateByUrl("/groups/add");
    // }
    deleteGroup(id) {
        this.groupservice.deleteGroup(id).subscribe({
            next: () => {
                this.router
                    .navigateByUrl("/", { skipLocationChange: true })
                    .then(() => {
                        this.router.navigate(["/groups"]);
                    });
            },
            complete: () => {
                console.log("Deleted succesfully");
            },
        });
        console.log(id);
    }
    onActivate(event) {
        if (event.type == "click") {
            console.log(event.row.id);
        }
    }

    createGroup() {
        this.router.navigateByUrl("/groups/a");
    }
    onEdit(row: Group) {
        this.router.navigateByUrl(`/groups/${row.id}`);
    }
}

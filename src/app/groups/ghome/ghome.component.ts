import { Component, OnInit } from "@angular/core";
import { GroupService } from "../group.service";
import { GroupTable } from "app/model/GroupTable";
import { Group } from "app/model/group";

import { Router } from "@angular/router";
@Component({
    selector: "app-ghome",
    templateUrl: "./ghome.component.html",
    styleUrls: ["./ghome.component.scss"],
})
export class GhomeComponent implements OnInit {
    //rows: GroupTable;
    v: GroupTable[];
    constructor(private groupservice: GroupService, public router: Router) {}

    ngOnInit(): void {
        this.groupservice.getCompleteGroup().subscribe((group: any) => {
            // this.rows = group;
            this.v = group.list;
            console.log(this.v);
        });
    }
    createGroup() {
        this.router.navigateByUrl("/groups/add");
    }
    onEdit(row: Group) {
        this.router.navigateByUrl(`/groups/${row.id}`);
    }
}

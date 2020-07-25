import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Group } from "app/model/group";
import { tap, List } from "lodash";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { from } from "rxjs";
import { GroupTable } from "app/model/GroupTable";
@Injectable({
    providedIn: "root",
})
export class GroupService {
    gname: String;
    form: FormGroup = new FormGroup({
        name: new FormControl("", [
            Validators.required,
            Validators.pattern("[a-zA-Z0-9- ]*"),
        ]),
        id: new FormControl(""),
    });
    rootUrl = "http://localhost:8081";
    constructor(private http_client: HttpClient) {}

    addGroup(group: Group) {
        return this.http_client.post(
            `${this.rootUrl}/iam/api/v1.0/group`,
            group,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
    }

    getAllGroups() {
        return this.http_client.get(`${this.rootUrl}/iam/api/v1.0/group`);
    }

    deleteGroup(id: Number) {
        return this.http_client.delete(
            `${this.rootUrl}/iam/api/v1.0/group/${id}`
        );
    }
    populateForm(row: Group) {
        this.form.setValue(row);
    }

    editGroup(group: Group) {
        return this.http_client.put(
            `${this.rootUrl}/iam/api/v1.0/group/${group.id}`,
            group,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
    }

    getGroupById(id: Number): any {
        return this.http_client.get<Group>(
            `${this.rootUrl}/iam/api/v1.0/group/${id}`
        );
    }
    getCompleteGroup() {
        return this.http_client.get<GroupTable[]>(
            `${this.rootUrl}/iam/api/v1.0/group/paging`,
            {
                params: {
                    page: "0",
                    pageSize: "10",
                },
            }
        );
    }
}

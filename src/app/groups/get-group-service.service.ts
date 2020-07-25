import { Injectable } from "@angular/core";
import {
    Resolve,
    ActivatedRoute,
    ActivatedRouteSnapshot,
    Router,
} from "@angular/router";
import { Group } from "app/model/group";
import { GroupService } from "./group.service";
import { Observable, EMPTY } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
    providedIn: "root",
})
export class GetGroupServiceService implements Resolve<Group> {
    // ct: any;
    constructor(private groupservice: GroupService, private router: Router) {}
    resolve(route: ActivatedRouteSnapshot): Group {
        const { id } = route.params;
        return this.groupservice.getGroupById(id).pipe(
            catchError(() => {
                this.router.navigateByUrl("/dashboard");
                return EMPTY;
            })
        );
        // this.ct = this.groupservice.getGroupById(id);
    }
}

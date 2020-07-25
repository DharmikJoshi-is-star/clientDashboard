import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GroupHomeComponent } from "./group-home/group-home.component";
import { CreateGroupComponent } from "./create-group/create-group.component";
import { EditformComponent } from "./editform/editform.component";
import { EformComponent } from "./eform/eform.component";
import { GetGroupServiceService } from "./get-group-service.service";
import { GhomeComponent } from "./ghome/ghome.component";

const routes: Routes = [
    { path: "", component: GhomeComponent },
    { path: "a", component: EditformComponent },
    {
        path: ":id",
        component: EformComponent,
        resolve: { group: GetGroupServiceService },
    },

    { path: "a", component: EditformComponent },

    { path: "add", component: CreateGroupComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class GroupsRoutingModule {}

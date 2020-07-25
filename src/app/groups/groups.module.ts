import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { GroupsRoutingModule } from "./groups-routing.module";
import { GroupHomeComponent } from "./group-home/group-home.component";
import { CreateGroupComponent } from "./create-group/create-group.component";
import { ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";

import { RouterModule } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";

import { FuseSharedModule } from "@fuse/shared.module";
import { MatDialogModule } from "@angular/material/dialog";

import { EditformComponent } from "./editform/editform.component";
import { EformComponent } from "./eform/eform.component";
import { GhomeComponent } from "./ghome/ghome.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [
        GroupHomeComponent,
        CreateGroupComponent,
        EditformComponent,
        EformComponent,
        GhomeComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        MatButtonModule,
        MatCheckboxModule,
        NgxDatatableModule,
        GroupsRoutingModule,
        ReactiveFormsModule,
        MatInputModule,
        MatIconModule,
        MatDialogModule,
        HttpClientModule,
    ],
})
export class GroupsModule {}

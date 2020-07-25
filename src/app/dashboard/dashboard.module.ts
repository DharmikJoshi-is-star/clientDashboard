import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashBoardHomeComponent } from "./dash-board-home/dash-board-home.component";
import { ClientDashboardComponent } from "./client-dashboard/client-dashboard.component";

import { MatInputModule } from "@angular/material/input";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { RouterModule } from "@angular/router";
import { MatIconModule } from "@angular/material/icon";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { FuseSharedModule } from "@fuse/shared.module";
import { AddClientFormComponent } from "./add-client-form/add-client-form.component";
import { MatTabsModule } from "@angular/material/tabs";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatListModule } from "@angular/material/list";
import { MatRadioModule } from "@angular/material/radio";
import { MatCardModule } from "@angular/material/card";

import { MatSnackBarModule } from "@angular/material/snack-bar";
import { CardComponent } from "./card/card.component";
import { CardFormComponent } from "./card-form/card-form.component";

@NgModule({
    declarations: [
        DashBoardHomeComponent,
        ClientDashboardComponent,
        AddClientFormComponent,
        CardComponent,
        CardFormComponent,
    ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        MatInputModule,
        MatIconModule,
        NgxDatatableModule,
        RouterModule,
        MatButtonModule,
        FuseSharedModule,
        MatTabsModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatSelectModule,
        MatListModule,
        MatRadioModule,
        ReactiveFormsModule,
        MatSnackBarModule,
        MatCardModule,
    ],
})
export class DashboardModule {}

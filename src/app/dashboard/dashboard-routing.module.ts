import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ClientDashboardComponent } from "./client-dashboard/client-dashboard.component";
import { AddClientFormComponent } from "./add-client-form/add-client-form.component";

const routes: Routes = [
    {
        path: "",
        component: ClientDashboardComponent,
    },
    { path: "addClient", component: AddClientFormComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DashboardRoutingModule {}

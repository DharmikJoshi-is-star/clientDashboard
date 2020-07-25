import { Component, OnInit } from "@angular/core";
import { Client } from "app/model/Client";
import { ClientDashboardService } from "../ClientDashboardService.service";
import { fuseAnimations } from "@fuse/animations";
import { Router } from "@angular/router";
import { UserClient } from "app/model/userclient.model";

@Component({
    selector: "app-client-dashboard",
    templateUrl: "./client-dashboard.component.html",
    styleUrls: ["./client-dashboard.component.scss"],
    animations: fuseAnimations,
})
export class ClientDashboardComponent implements OnInit {
    clients: Client[] = [];
    userClients: UserClient[] = [];
    arr: any;
    constructor(
        public router: Router,
        public clientDashboardService: ClientDashboardService
    ) {}

    ngOnInit(): void {
        this.clients = this.clientDashboardService.getClients();
        this.userClients = this.clientDashboardService.getUserClients();
    }

    onClickAddClient(): void {
        this.router.navigateByUrl(`/dashboard/addClient`);
    }
}

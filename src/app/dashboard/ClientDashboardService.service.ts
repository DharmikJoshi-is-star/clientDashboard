import { Injectable } from "@angular/core";
import { Client } from "app/model/Client";
import { Product } from "app/model/Product";
import { UserClient } from "app/model/userclient.model";

@Injectable({
    providedIn: "root",
})
export class ClientDashboardService {
    private clients: Client[] = [];
    private userClients: UserClient[] = [];
    constructor() {}

    createUserClient(id: number): UserClient {
        let userClient: UserClient = {
            id: id,
            basicInfo: {
                id: id,
                name: "Dharmik Joshi",
                address: "135/A1,jawahar nagar ,goregaon west",
                city: "Mumbai",
                state: "MAHARASHTRA",
                logo: "assets/images/ecommerce/a-walk-amongst-friends.jpg",
            },
            products: [
                { id: 1, name: "CRM", package: "Package3" },
                { id: 2, name: "SCM", package: "Package3" },
            ],
            customBill: {
                billingCycle: "One TIme",
                productbills: [
                    {
                        product: { id: 1, name: "CRM", package: "Package3" },
                        discount: 45,
                    },
                    {
                        product: { id: 2, name: "SCM", package: "Package3" },
                        discount: 45,
                    },
                ],
            },
            adminUser: {
                id: 1,
                email: "dharmikj75@gmail.com",
                mobile: "9096167416",
                name: "Dharmik Joshi",
                password: "passwordispassword",
                username: "Dharmik",
            },
        };
        return userClient;
    }
    getUserClients(): UserClient[] {
        for (let index = 0; index < 20; index++) {
            this.userClients.push(this.createUserClient(index));
        }
        return this.userClients;
    }
    addUserClients(userClient: UserClient): void {
        this.userClients.push(userClient);
    }

    //////////////////////////////
    getClients(): Client[] {
        for (let index = 0; index < 20; index++) {
            this.clients.push(this.createNewClient(index));
        }
        return this.clients;
    }
    createNewClient(id: number): Client {
        let products: Product[] = [
            {
                id: 1,
                name: "CRM",
                package: "pc",
            },
            {
                id: 2,
                name: "SCM",
                package: "pc",
            },
        ];
        let client: Client = {
            id: id,
            logo: "assets/images/ecommerce/a-walk-amongst-friends.jpg",
            country: "India",
            address: "",
            city: "",
            name: "Client1",
            products: products,
        };
        return client;
    }
}

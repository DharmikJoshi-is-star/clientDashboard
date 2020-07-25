import { Injectable } from "@angular/core";
import { Product } from "app/model/Product";

@Injectable({
    providedIn: "root",
})
export class AddClientService {
    getBillingCycles(): any[] {
        let billing_cycles: any[] = [];
        billing_cycles.push("One TIme");
        billing_cycles.push("Recurring");
        return billing_cycles;
    }

    getPackages(): any[] {
        let packages: any[] = [];
        packages.push("Package1");
        packages.push("Package2");
        packages.push("Package3");
        packages.push("Package4");

        return packages;
    }

    getProducts(): Product[] {
        let products: Product[] = [];
        let product1: Product = {
            id: 1,
            name: "CRM",
            package: "Package1",
        };
        let product2: Product = {
            id: 2,
            name: "SCM",
            package: "Package1",
        };
        let product3: Product = {
            id: 3,
            name: "HR",
            package: "Package1",
        };
        let product4: Product = {
            id: 4,
            name: "FICO",
            package: "Package1",
        };
        products.push(product1);
        products.push(product2);
        products.push(product3);
        products.push(product4);

        return products;
    }
}

import { Component, OnInit } from "@angular/core";

import { FormGroup, FormControl, Validators } from "@angular/forms";

import { fuseAnimations } from "@fuse/animations";

import { Product } from "app/model/Product";
import { AddClientService } from "../AddClientService.service";
import { ProductBill } from "app/model/product-bill.model";
import { CustomBill } from "app/model/custom-bill.model";
import { UserClient } from "app/model/userclient.model";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ClientDashboardService } from "../ClientDashboardService.service";
import { Router } from "@angular/router";

@Component({
    selector: "app-add-client-form",
    templateUrl: "./add-client-form.component.html",
    styleUrls: ["./add-client-form.component.scss"],
    animations: fuseAnimations,
})
export class AddClientFormComponent implements OnInit {
    cardName: String = "Dharmik Joshi";
    cardNumber: String = "4567 3456 3456 3456";
    cardExpiry: String = "12/21";
    amount: number = 1000;
    cardSubmit: boolean = false;
    selectTabGroup: boolean[] = [false, true, true, true];
    selectTab: number = 0;
    products: Product[] = [];
    product_form_err = "";
    checkProducts: { checked: boolean; product: Product }[] = [];
    packages: any[] = [];
    billing_cycles: any[] = [];
    logoUrl: string = "";

    userClient: UserClient = {
        id: 0,
        adminUser: null,
        basicInfo: null,
        customBill: null,
        products: null,
    };

    //Custom Billing Form
    customBilling: CustomBill;

    //Products Info form
    submitedProducts: Product[] = [];

    //Basic Info form group
    basicInfoForm: FormGroup = new FormGroup({
        name: new FormControl("", [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(25),
            Validators.pattern("[a-zA-Z ]*"),
        ]),
        address: new FormControl("", [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(50),
            Validators.pattern("[a-zA-Z0-9,/() ]*"),
        ]),
        city: new FormControl("", [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(25),
            Validators.pattern("[a-zA-Z ]*"),
        ]),
        state: new FormControl("", [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(25),
            Validators.pattern("[a-zA-Z ]*"),
        ]),
        logo: new FormControl("", [Validators.required]),
    });

    //Admin User form group
    adminUserForm: FormGroup = new FormGroup({
        name: new FormControl("", [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(25),
            Validators.pattern("[a-zA-Z ]*"),
        ]),
        username: new FormControl("", [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(25),
            Validators.pattern("[a-zA-Z0-9 ]*"),
        ]),
        password: new FormControl("", [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(25),
            Validators.pattern("[a-zA-Z0-9 ]*"),
        ]),
        mobile: new FormControl("", [
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(10),
            Validators.pattern("[0-9]*"),
        ]),
        email: new FormControl("", [Validators.required, Validators.email]),
    });

    constructor(
        private addClientService: AddClientService,
        private _snackBar: MatSnackBar
    ) {}

    ngOnInit(): void {
        this.products = this.addClientService.getProducts();
        this.checkProducts = this.products.map((p) =>
            this.productToCheckProduct(p)
        );
        this.packages = this.addClientService.getPackages();
        this.billing_cycles = this.addClientService.getBillingCycles();
    }

    openSnackBar() {
        this._snackBar.open("Client added Successfully!!", "End now", {
            duration: 2000,
            horizontalPosition: "center",
            verticalPosition: "top",
        });
    }

    onadminSubmit() {
        console.log(this.adminUserForm);
        this.userClient.adminUser = this.adminUserForm.value;
        console.log("User Client", this.userClient);
        this.openSnackBar();
    }

    /**for Custom Billing Form START */
    setUpFormTemplate(products: Product[]) {
        let customBilling: CustomBill = {
            billingCycle: "",
            productbills: products.map((p) => {
                return <ProductBill>{
                    product: p,
                    discount: 0,
                };
            }),
        };

        this.customBilling = customBilling;
        console.log(this.customBilling);
    }
    submitCustomBilling() {
        console.log(this.customBilling);
        if (this.customBilling.billingCycle != "") {
            this.nextStep();
            this.userClient.customBill = this.customBilling;
        }
    }
    /**for Custom Billing Form END */

    /**for product Form START*/
    private productToCheckProduct(product: Product) {
        return <{ checked: boolean; product: Product }>{
            checked: false,
            product: product,
        };
    }
    private checkProductToProduct(checkedProduct: {
        checked: boolean;
        product: Product;
    }) {
        if (checkedProduct.checked) {
            return <Product>checkedProduct.product;
        } else return null;
    }
    submitProductForm() {
        this.submitedProducts = this.checkProducts
            .map((cp) => {
                if (cp.checked && cp.product.package != "")
                    return this.checkProductToProduct(cp);
            })
            .filter((p) => p);
        console.log(this.submitedProducts);

        if (this.submitedProducts.length != 0) {
            this.product_form_err = "";
            this.setUpFormTemplate(this.submitedProducts);
            this.userClient.products = this.submitedProducts;
            this.nextStep();
        } else this.product_form_err = "Select One Package";
    }
    /**for product Form END */

    /**for Basic Info Form START*/
    submitBasicInfo() {
        console.log(this.basicInfoForm.value);
        this.userClient.basicInfo = this.basicInfoForm.value;
        this.nextStep();
    }
    /**for Basic Info Form END*/

    /*Logo upload START */
    /**On click event for 'Upload Logo' button..
     * When on click create a reference of hidden input field type:'file' name: "fileUpload"
     * set an onchage event on it
     * and trigger the hidden input field so that user can select the logo image..
     * onchange of input field will pass the file to uploadLogo function
     * upload logo function will save the file and will return us the url of logo...
     */
    onUploadBtnClick() {
        const fileUpload = document.getElementById(
            "fileUpload"
        ) as HTMLInputElement;

        fileUpload.onchange = () => {
            this.logoUrl = this.uploadLogo(fileUpload.files[0]);
            this.logoUrl = "assets/images/ecommerce/a-walk-amongst-friends.jpg";
        };

        fileUpload.click();
    }

    private uploadLogo(logoFile: File) {
        return logoFile.name;
    }
    /*Logo upload END */

    /**Change TAB START*/
    /**Select tab is variable that hold the index value of current opened tab */
    /**Change the tab forward */
    public nextStep() {
        this.selectTab += 1;
        this.selectTabGroup = this.selectTabGroup.map((b) => {
            return true;
        });
        this.selectTabGroup[this.selectTab] = false;
    }
    /**Change the tab Backward */
    public previousStep() {
        this.selectTab -= 1;
        this.selectTabGroup = this.selectTabGroup.map((b) => {
            return true;
        });
        this.selectTabGroup[this.selectTab] = false;
    }
    /**Change TAB End*/

    onCardNumberEmitter(cardNo: String) {
        console.log("event");
        console.log(event);
        this.cardNumber = cardNo;
    }
    onCardNameEmitter(cardName: String) {
        console.log("event");
        console.log(event);
        this.cardName = cardName;
    }
    onCardExpiryEmitter(cardExpiry: String) {
        console.log("event");
        console.log(event);
        this.cardExpiry = cardExpiry;
    }
    onCardInfoSubmitEmitter(isSubmit: boolean) {
        this.cardSubmit = isSubmit;
    }
}

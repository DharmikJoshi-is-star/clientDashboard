import { ProductBill } from "./product-bill.model";

export interface CustomBill {
    productbills: ProductBill[];
    billingCycle: String;
}

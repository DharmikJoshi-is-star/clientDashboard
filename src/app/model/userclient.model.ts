import { BasicInfo } from "./basic-info.model";
import { Product } from "./Product";
import { CustomBill } from "./custom-bill.model";
import { AdminUser } from "./adminuser.model";

export interface UserClient {
    id: number;
    basicInfo: BasicInfo;
    products: Product[];
    customBill: CustomBill;
    adminUser: AdminUser;
}

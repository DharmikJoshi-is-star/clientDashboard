import { Product } from "./Product";

export interface Client {
    id: number;
    name: String;
    address: String;
    city: String;
    country: String;
    logo: String;
    products: Product[];
}

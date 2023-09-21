import { Item } from "../ItemFactory";

const D_PRICE = 15;

export class D implements Item {
    getPrice(): number {
        return D_PRICE;
    }
}
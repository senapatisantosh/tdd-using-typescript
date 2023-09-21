import { itemFactory } from "./Items/Item";
import { Discount } from "./Discount";

export class Store {
    constructor(private discountList?: Discount[]) { }
    
    checkout(itemList: string): number {
        const total = this.calculateTotal(itemList)
        const discount = this.calculateDiscount(itemList);
        return total - discount;
    }

    private calculateTotal(itemList: string): number {
        let total = 0;
        for (const itemChar of itemList.split('')) {
            const item = itemFactory(itemChar);
            total += item.getPrice();
        }
        return total;
    }

    private calculateDiscount(itemList: string): number {
        let totalDiscount = 0;
        for (const discount of this.discountList) {
            totalDiscount += discount.calculateDiscount(itemList);
        }
        return totalDiscount;
    }
}

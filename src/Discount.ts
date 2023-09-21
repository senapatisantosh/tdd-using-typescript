import { ItemType } from "./Items/ItemFactory";

export class Discount {
    constructor(private itemType: ItemType, private quantity: number, private discount: number) { }
    calculateDiscount(itemList: string): number {
        const A_Counter = itemList.split('').filter(item => item === this.itemType).length;
        return Math.trunc(A_Counter/this.quantity) * this.discount;
    }
}
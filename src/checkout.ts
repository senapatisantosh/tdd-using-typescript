import { itemFactory } from "./Items/item";

export function checkout(itemList: string): number {
    let total = 0;
    for (const itemChar of itemList.split('')) {
        const item = itemFactory(itemChar);
        total += item.getPrice();
    }

    const A_Counter = itemList.split('').filter(item => item === 'A').length;
    total -= Math.trunc(A_Counter/3) * 20;

    const B_Counter = itemList.split('').filter(item => item === 'B').length;
    total -= Math.trunc(B_Counter/2) * 15;

    return total;
}

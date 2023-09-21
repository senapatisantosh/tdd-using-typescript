import { A } from "./products/A";
import { B } from "./products/B";
import { C } from "./products/C";
import { D } from "./products/D";

export interface Item {
    getPrice(): number;
}

export function itemFactory(itemChar: string): Item {
    if (itemChar === 'A') return new A();
    else if (itemChar === 'B') return new B();
    else if (itemChar === 'C') return new C();
    else if (itemChar === 'D') return new D();
    else throw new Error("Unknown Item");
}

export enum ItemType {
    A = 'A',
    B = 'B',
    C = 'C',
    D = 'D',
}
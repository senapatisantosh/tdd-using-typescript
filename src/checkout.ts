const A_PRICE = 50;
const B_PRICE = 30;
const C_PRICE = 20;
const D_PRICE = 15;

interface Item {
    getPrice(): number;
}

class A implements Item {
    getPrice(): number {
        return A_PRICE;
    }
}

class B implements Item {
    getPrice(): number {
        return B_PRICE;
    }
}

class C implements Item {
    getPrice(): number {
        return C_PRICE;
    }
}

class D implements Item {
    getPrice(): number {
        return D_PRICE;
    }
}

function itemFactory(itemChar: string): Item {
    if (itemChar === 'A') return new A();
    else if (itemChar === 'B') return new B();
    else if (itemChar === 'C') return new C();
    else if (itemChar === 'D') return new D();
    else throw new Error("Unknown Item");
}

export function checkout(itemList: string): number {
    let total = 0;
    for (const itemChar of itemList.split('')) {
        const item = itemFactory(itemChar);
        total += item.getPrice();
    }
    return total;
}
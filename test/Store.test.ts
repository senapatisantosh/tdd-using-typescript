import { ItemType } from "../src/Items/ItemFactory";
import { Store } from "../src/Store";
import { Discount } from "../src/Discount";

describe('Store test', () => {

    const discountA = new Discount(ItemType.A, 3, 20);
    const discountB = new Discount(ItemType.B, 2, 15);

    const store = new Store([discountA, discountB]);

    it('Should return 0 when no items are sent', () => {
        expect(store.checkout('')).toBe(0);
    });
    it('Should return 50 when sending an A', () => {
        expect(store.checkout('A')).toBe(50);
    });
    it('Should return 30 when sending a B', () => {
        expect(store.checkout('B')).toBe(30);
    });
    it('Should return 20 when sending a C', () => {
        expect(store.checkout('C')).toBe(20);
    });
    it('Should return 15 when sending a D', () => {
        expect(store.checkout('D')).toBe(15);
    });
    it('Should return 100 when sending AA', () => {
        expect(store.checkout('AA')).toBe(100);
    });
    it('Should return 115 when sending ABCD', () => {
        expect(store.checkout('ABCD')).toBe(115);
    });
    it('Should throw an error when sending an Unknown item', () => {
        expect(() => store.checkout('Z')).toThrow('Unknown Item');
    });
    it('Should apply a discount when having 3 As', () => {
        expect(store.checkout('AAA')).toBe(130);
    });
    it('Should apply a discount when having 8 As', () => {
        expect(store.checkout('AAAAAAAA')).toBe(360);
    });
    it('Should apply a discount when having 2 Bs', () => {
        expect(store.checkout('BB')).toBe(45);
    });
    it('Should apply a discount when having 3 Bs', () => {
        expect(store.checkout('BBB')).toBe(75);
    });
    it('Should apply a discount when having items in the cart - AABCDADDCD', () => {
        expect(store.checkout('AABCDADDCD')).toBe(260);
    });
    it('Should apply a discount when having items in the cart - AAABBBCCCDDD', () => {
        expect(store.checkout('AAABBBCCCDDD')).toBe(310);
    });
})
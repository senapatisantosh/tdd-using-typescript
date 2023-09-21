import { checkout } from "../src/checkout";

describe('checkout test', () => {
    it('Should return 0 when no items are sent', () => {
        expect(checkout('')).toBe(0);
    });
    it('Should return 50 when sending an A', () => {
        expect(checkout('A')).toBe(50);
    });
    it('Should return 30 when sending a B', () => {
        expect(checkout('B')).toBe(30);
    });
    it('Should return 20 when sending a C', () => {
        expect(checkout('C')).toBe(20);
    });
    it('Should return 15 when sending a D', () => {
        expect(checkout('D')).toBe(15);
    });
    it('Should return 100 when sending AA', () => {
        expect(checkout('AA')).toBe(100);
    });
    it('Should return 115 when sending ABCD', () => {
        expect(checkout('ABCD')).toBe(115);
    });
    it('Should throw an error when sending an Unknown item', () => {
        expect(() => checkout('Z')).toThrow('Unknown Item');
    });
    it('Should apply a discount when having 3 As', () => {
        expect(checkout('AAA')).toBe(130);
    });
    it('Should apply a discount when having 8 As', () => {
        expect(checkout('AAAAAAAA')).toBe(360);
    });
    it('Should apply a discount when having 2 Bs', () => {
        expect(checkout('BB')).toBe(45);
    });
    it('Should apply a discount when having 3 Bs', () => {
        expect(checkout('BBB')).toBe(75);
    });
})
import { checkout } from "../src/checkout";

describe('checkout', () => {
    it('cbd', () => {
        expect(checkout('')).toBe(1);
    });
})
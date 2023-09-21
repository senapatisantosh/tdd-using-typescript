import { checkout } from "../src/checkout";

describe('checkout', () => {
    it.todo('Should return 0 when no items are sent');
    it.todo('Should return 50 when sending an A');
    it.todo('Should return 30 when sending a B');
    it.todo('Should return 20 when sending a C');
    it.todo('Should return 15 when sending a D');
    it.todo('Should return 100 when sending AA');
    it.todo('Should return 115 when sending ABCD');
    it.todo('Should throw an error when sending an Unknown item');
    it.todo('Should apply a discount when having 3 As');
    it.todo('Should apply a discount when having 8 As');
    it.todo('Should apply a discount when having 2 Bs');
    it.todo('Should apply a discount when having 3 Bs');
    it.todo('Should apply a discount when having items in the cart - AABCDADDCD');
    it.todo('Should apply a discount when having items in the cart - AAABBBCCCDDD');
})
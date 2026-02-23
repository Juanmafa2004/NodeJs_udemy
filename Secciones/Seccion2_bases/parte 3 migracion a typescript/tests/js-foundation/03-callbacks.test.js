"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _04_arrow_1 = require("./../../src/js-foundation/04-arrow");
describe('js-foundation/03-callbacks.ts', () => {
    test('getUserById should return error if user not found', (done) => {
        const id = 10;
        (0, _04_arrow_1.getUserById)(id, (err, user) => {
            expect(err).toBe(`User not found with id ${id}`);
            expect(user).toBeUndefined();
            done();
        });
    });
    test('getUserById should return John Doe', (done) => {
        const id = 1;
        (0, _04_arrow_1.getUserById)(id, (err, user) => {
            expect(err).toBeUndefined();
            expect(user).toStrictEqual({
                id: 1,
                name: 'John Doe',
            });
            done();
        });
    });
});

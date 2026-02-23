"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _05_factory_1 = require("./../../src/js-foundation/05-factory");
describe('js-foundation/05-factory', () => {
    const getUUID = () => '123445';
    const getAge = () => 35;
    test('buildMakePerson should return a function', () => {
        const makePerson = (0, _05_factory_1.buildMakePerson)({ getAge, getUUID });
        expect(typeof makePerson).toBe('function');
    });
    test('makePerson should return a person object', () => {
        const makePerson = (0, _05_factory_1.buildMakePerson)({ getAge, getUUID });
        const johnDoe = makePerson({ name: 'John Doe', birthdate: '1985-10-21' });
        expect(johnDoe).toEqual({
            id: '123445',
            name: 'John Doe',
            birthdate: '1985-10-21',
            age: 35
        });
    });
});

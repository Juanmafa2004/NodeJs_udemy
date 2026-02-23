"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _01_template_1 = require("./../../src/js-foundation/01-template");
describe('js-foundation - 01-template', () => {
    test('emailTemplate should contain a greeting', () => {
        expect(_01_template_1.emailTemplate).toContain('Hi, ');
    });
    test('emailTemplate should contain {{name}} and {{orderId}}', () => {
        expect(_01_template_1.emailTemplate).toContain('{{name}}');
        expect(_01_template_1.emailTemplate).toContain('{{orderId}}');
        expect(_01_template_1.emailTemplate).toMatch(/\{\{name\}\}/);
        expect(_01_template_1.emailTemplate).toMatch(/\{\{orderId\}\}/);
    });
});

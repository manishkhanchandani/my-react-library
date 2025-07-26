"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../");
describe("greet", () => {
    it("returns the correct greeting", () => {
        expect((0, __1.greet)("Manish")).toBe("Hello, Manish");
    });
});

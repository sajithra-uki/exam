"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeometricObject = void 0;
const Rectangle_1 = require("./Rectangle");
const cricle_1 = require("./cricle");
class GeometricObject {
    color;
    filled;
    dateCreated;
    constructor(color = "White", filled = false) {
        this.color = color;
        this.filled = filled;
        this.dateCreated = new Date();
    }
    setColor(color) {
        this.color = color;
    }
    isFilled() {
        return this.filled;
    }
    setFilled(filled) {
        this.filled = filled;
    }
    getDateCreated() {
        return this.dateCreated;
    }
    toString() {
        return `GeometricObject [color: ${this.color}, filled: ${this.filled}, dateCreated: ${this.dateCreated.toDateString()}]`;
    }
}
exports.GeometricObject = GeometricObject;
//# sourceMappingURL=GeometricObject.js.map
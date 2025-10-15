"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bick = void 0;
const Vehicle_1 = require("./Vehicle");
class Bick extends Vehicle_1.Vehicle {
    speedOfBick = 100;
    constructor(speed, speedOfBick) {
        super(speed);
        this.speedOfBick = speedOfBick;
    }
    getSpeedOfTheBick() {
        console.log("speed of the Bick is" + this.speedOfBick);
    }
}
exports.Bick = Bick;
//# sourceMappingURL=bick1.js.map
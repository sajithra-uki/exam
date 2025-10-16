"use strict";
//parent:Bank 2.5%
//children: BOC-8.2%, HNB-7.3%, People-7.9%,
Object.defineProperty(exports, "__esModule", { value: true });
exports.BOC = exports.Bank = void 0;
class Bank {
    deposit;
    interestRate() {
        return this.deposit * 2.5;
    }
}
exports.Bank = Bank;
class BOC extends Bank {
    constructor() {
        super();
    }
    interestRate() {
        return this.deposit * 8.2;
    }
}
exports.BOC = BOC;
//# sourceMappingURL=Bank.js.map
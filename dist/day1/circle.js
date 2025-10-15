"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.students = void 0;
class students {
    sName;
    sAge;
    sDistrict;
    constructor(sName, sAge, sDistrict) {
        this.sName = sName;
        this.sAge = sAge;
        this.sDistrict = sDistrict;
    }
    setstudentName(name) {
        this.sName = name;
    }
    setstudentage(age) {
        this.sAge = age;
    }
    setstudentDistrict(sDistrict) {
        this.sDistrict = sDistrict;
    }
    getstudentName() {
        return this.sName;
    }
    getstudentage() {
        return this.sAge;
    }
    getstudentsDistrict() {
        return this.sDistrict;
    }
}
exports.students = students;
//# sourceMappingURL=circle.js.map
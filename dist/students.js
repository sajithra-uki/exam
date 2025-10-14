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
    setStudentName(name) {
        this.sName = sName;
    }
    setStudentAge(age) {
        this.sAge = sAge;
    }
    setStudentDisrict(District) {
        this.sDistrict = sDistrict;
    }
    getStudentName() {
        return this.sName;
    }
    getStudentAge() {
        return this.sAge;
    }
    getStudentDisrict() {
        return this.sDistrict;
    }
}
exports.students = students;
//# sourceMappingURL=students.js.map
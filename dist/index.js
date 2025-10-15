"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const circle_1 = require("./day1/circle");
function main() {
    const student1 = new circle_1.students("saji", 24, "bogo");
    console.log(student1.getstudentName());
    console.log(student1.getstudentAge());
    console.log(student1.getstudentDistrict());
}
main();
//# sourceMappingURL=index.js.map

function functionForBanking(){
    const bankobj = new Bank();
    const BOCobj = new BOC();
    const hnbobj = new HNB();
    const Peoplesobj = new Peoples();
    console.log("How much I'll get if i deposite"+bankobj.deposit+"in each bank.");
    console.log ("I'll get  "+bankobj.interest()+"in general");
    console.log ("I'll get  "+hnbkobj.interest()+"in HNB");
    console.log ("I'll get  "+bocobj.interest()+"in BOC");
    console.log ("I'll get  "+Peoplesobj.interest()+"in Peoples");


}
import {students} from "./day1/circle"

function main(){
    const student1=new students("saji",24,"bogo");
     console.log (student1.getstudentName())
     console.log (student1.getstudentAge())
     console.log (student1.getstudentDistrict())
}
main();
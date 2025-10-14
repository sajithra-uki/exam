
export class students{
   private sName:string;
   private sAge :number;
   private sDistrict:string;
   constructor (sName:string, sAge:number,sDistrict:string ){
    this.sName=sName;
    this.sAge=sAge;
    this.sDistrict=sDistrict;
   }
   public setstudentName(name:string){
    this.sName=name;
   }
   public setstudentage(age:number){
    this.sAge=age;
   }
   public setstudentDistrict(sDistrict:string){
    this.sDistrict=sDistrict;
   }
   public getstudentName(){
    return this.sName;
   }
   public getstudentage(){
    return this.sAge;
   }
   public getstudentsDistrict(){
    return this.sDistrict;
   }
}







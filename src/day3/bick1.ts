import{ Vehicle } from "./Vehicle";

export class Bick extends Vehicle {
    private speedOfBick:number =100;

    constructor(speed:number, speedOfBick:number){
        super(speed);
        this.speedOfBick=speedOfBick;
    }
    public getSpeedOfTheBick():void {
        console.log("speed of the Bick is"+this.speedOfBick);
    
        
    }
}
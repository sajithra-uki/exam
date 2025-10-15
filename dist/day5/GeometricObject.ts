export class GeometricObject{

    private speed:number=20;

    constructor(speed:number){
        this.speed =speed;
    }
    public getSpeedOfTheVehicle():void{
        console.log("The speed of the Vehicle is "+this.speed);
    }
}
import{ Rectangle } from "./Rectangle";
import{Circle} from "./cricle";

export class GeometricObject extends Rectangle {
    private GeometricObject();

    constructor GeometricObject(color:string, Filled:boolean){
        
        this.GeometricObject;
    }
    public getColor(): string{
        console.log(""+this.getColor);
    }
    public setColor(color:string):void{
        console.log(""+this.setColor);
    }
    public isFilled():boolean{
        console.log(""+this.isFilled);
    }
    public getDateCreate():void {
        console.log("this is the "+this.GeometricObject);  
    }
    public toString():String{
        console.log(""+this.toString);
    }
}
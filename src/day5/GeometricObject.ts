import{ Rectangle } from "./Rectangle";
import{Circle} from "./Cricle";


export class GeometricObject {
    private color: string;
    private filled: boolean;
    private dateCreated: Date;


   constructor (color: string = "White", filled: boolean = false) {
        
        this.color = color;
        this.filled = filled;
        this.dateCreated = new Date(); 
    }
    
    public setColor(color: string): void {
        this.color = color;
    }
    public isFilled(): boolean {
        return this.filled; 
    }
     public setFilled(filled: boolean): void {
        this.filled = filled;
    }
    public getDateCreated(): Date { 
        return this.dateCreated;
    }
    public toString(): string {
        return `GeometricObject [color: ${this.color}, filled: ${this.filled}, dateCreated: ${this.dateCreated.toDateString()}]`;
    }
}
//parent:Bank 2.5%
//children: BOC-8.2%, HNB-7.3%, People-7.9%,

export class Bank{

    private deposit:number;

    public interestRate():number{
        return this.deposit*2.5;
    }
      

    export class BOC  extends Bank{
        constructor() {
            super();
            
        }
        public interestRate(): number {
            return this.deposit*8.2
        }

    }
    
}
export class Stack<T>{
    private elements:T[];

    constructor(){
        this.elements = [];
    }

    push(el:T):void{
        this.elements.push(el);
    }

    pop(){
        return this.elements.pop();
    }

    size():number{
        return this.elements.length;
    }

}
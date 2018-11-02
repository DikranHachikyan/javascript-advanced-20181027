
class Person {
    //1.данни на класа
    private firstName:string;
    private lastName:string;
    age:number; //public default
    //2.Методи
    //2.1 конструктор (Инициализира данните на класа)
    constructor(firstName:string, lastName:string, age?:number){
        this.firstName = firstName;
        this.lastName  = lastName;
        this.age = (age === undefined )? -1:age;
    }

    show():void{
        console.log(`Person:${this.firstName} ${this.lastName} age:${this.age}`);
    }
}

const person = new Person('John', 'Doe', 30);

person.show();



class User{

    constructor(private firstName:string, private lastName:string, private age?:number){
        this.age = (age !== undefined)? age:-1;
    }

    show():void{
        console.log(`User:${this.firstName} ${this.lastName} age:${this.age}`);
    }
}

const user = new User('Anna','Smith');

user.show();

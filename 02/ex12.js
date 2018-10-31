"use strict"

//A: декларация на клас

class User{
    //Инициализира данните класа
    constructor(firstName, lastName){
        this._firstName = firstName;
        this._lastName  = lastName;
    }

    set firstName(firstName){
        this._firstName = firstName;
    }

    get firstName(){
        return this._firstName;
    }

    set lastName(lastName){
        this._lastName = lastName;
    }

    get lastName(){
        return this._lastName;
    }

    show(){
        console.log(`User:${this.firstName} ${this.lastName}`);
    }
}

class Admin extends User{
    constructor(firstName,lastName,admin){
        //извикване конструктора на прекия родител
        super(firstName,lastName);
        this.isAdmin = admin;
    }
}

const user = new User('Anna', 'Smith');

user.firstName = 'Maria';

user.show();

console.log(typeof User);


const admin = new Admin('John','Doe',true);

admin.show();
console.log(`User: ${admin.firstName} is admin: ${admin.isAdmin}`);
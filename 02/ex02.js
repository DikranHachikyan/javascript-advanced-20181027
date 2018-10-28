"use strict"

//A: декларация на клас
function User(fname = '',lname = '', age=0){
    console.log('Constructor');
    //1. данни на класа
    //private
    let firstName = upper(fname);
    let lastName  = upper(lname);
    //public
    this.age = age;
    //2. методи на класа (функция)
    //public method
    this.show = ()=>{
        console.log(`###User ${firstName} ${lastName} Age:${this.age}###`);
    };
    //private method
    function upper(text){
        return text.toUpperCase();
    }
}


//B:създаване на обект
const john = new User('John','Doe',20);

john.show();
john.isAdmin = true;

console.log(`John is admin:${john.isAdmin}`);

const anna = new User('Anna', 'Smith',30);
anna.show();
console.log(`Anna is admin:${anna.isAdmin}`);
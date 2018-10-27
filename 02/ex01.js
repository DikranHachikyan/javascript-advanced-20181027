"use strict"

//A: декларация на клас
function User(){
    console.log('Constructor');
    //1. данни на класа
    //private
    let firstName = 'John';
    let lastName  = '';
    //public
    this.age = 30;
    //2. методи на класа (функция)
    //public method
    this.show = ()=>{
        console.log(`###User ${firstName} Age:${this.age}###`);
        foo();
    };
    //private method
    function foo(){
        console.log('function foo');
    }
}


//B:създаване на обект
const john = new User();
console.log('Age:', john.age);
console.log('First Name:', john.firstName);//undefined зашото е private 

john.show();
//john.foo(); //Exception защото е private
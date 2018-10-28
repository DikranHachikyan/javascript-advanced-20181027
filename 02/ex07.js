"use strict"

//A: декларация на клас
function User(fname = '',lname = ''){
    console.log('Constructor');
    //1. данни на класа
    //private
    let firstName = upper(fname);
    let lastName  = upper(lname);
   
    //2. методи на класа (функция)
    
    this.setFirstName = function(fname){
        firstName = upper(fname);
    }
    this.setLastName = function(lname){
        lastName = upper(lname);
    } 

    this.getFirstName = function(){
        return firstName;
    }
    this.getLastName = function(){
        return lastName;
    } 


    //private method
    function upper(text){
        return text.toUpperCase();
    }
}

User.prototype.show = function(){
        console.log(`###User ${this.getFirstName()} ${this.getLastName()}###`);
};  

//Method Override
User.prototype.toString = function(){
    return `${this.getFirstName()} ${this.getLastName()} isAdmin:${this.isAdmin}`;
};

User.prototype.isAdmin = false;

User.prototype.setNames = function(fname,lname){
    this.setFirstName(fname);
    this.setLastName(lname);
}
//B:създаване на обект
const john = new User('John','Doe');

john.show();
john.isAdmin = true;
console.log('User:' + john);

const anna = new User();
anna.setNames('Anna','Smith');
console.log('User:' + anna);

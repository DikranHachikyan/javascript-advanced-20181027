"use strict"

//A: декларация на клас

function User(){
    this.show = function(){
        console.log(`User:${this.firstName} ${this.lastName}`);
    }
}

Object.defineProperty(User.prototype, 'firstName', {
    set: function(name){
        console.log('first name setter');
        this.__fname = name;
    },
    get:function(){
        console.log('first name getter');
        return this.__fname;
    }
});


const maria = new User();

maria.firstName = 'Maria';

console.log(`User:${maria.firstName}`);
console.log(`User:${maria.__fname}`);

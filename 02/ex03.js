"use strict"

let x = 10; //10 literal

function printUser(user){
    if( typeof user.firstName === undefined || typeof user.lastName === undefined){
        throw Error('Missing firstName, lastName');
    }
    console.log(`${user.firstName} ${user.lastName}`);
}
//A: декларация на клас


//B:създаване на обект

const john = {
    firstName: 'John',
    lastName : 'Doe',
    show: function(){
        console.log(`${this.firstName} ${this.lastName}`);
    }
};

john.show();

const anna = Object.create(john);
anna.firstName = 'Anna';
anna.lastName = 'Smith';

anna.show();
john.show();

printUser(anna);

printUser({firstName:'Maria',lastName:'Anderson'});


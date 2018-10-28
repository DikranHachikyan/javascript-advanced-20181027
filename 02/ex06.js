"use strict";

//A: декларация на клас

const User = (function(){
    //PRIVATE
    //private data
    let firstName;
    let lastName;

    //private methods
    function show(){
        console.log(`${firstName} ${lastName}`);
    }

    function register(fname,lname){
        firstName = fname;
        lastName = lname;
    }

    //PUBLIC
    return function(fname,lname){
            register(fname,lname);

            this.print = show;
            this.setNames = register;

            this.isRegistered = function(){
                return firstName !== undefined && lastName !== undefined;
            }
            console.log('Ctor User');

    };//return

})();

//B:създаване на обект
const john = new User('John','Doe');
john.print();

const maria = new User('Maria','Anders');

if( maria.isRegistered()){
    maria.print();
}

const anna = new User();

if( !anna.isRegistered()){
    anna.setNames('Anna','Smith');
}

anna.print();
//User is not a constructor
//const anna = new User();
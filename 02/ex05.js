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
    return {
        show,
        setNames:register,
        mail:'john@no.com',
        isRegistered: function(){
            //show();
            return firstName !== undefined && lastName !== undefined; 
        }
    };

})();

//B:създаване на обект
User.setNames('John','Doe');
if( User.isRegistered()){
    //User.print();
    User.show();
}

//User is not a constructor
//const anna = new User();
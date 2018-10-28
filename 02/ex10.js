"use strict"

//A: декларация на клас

const User = {
    set firstName(fname){
        console.log('first name setter');
        this.first = fname;
    },
    get firstName(){
        console.log('first name getter');
        return this.first;
    },
    show: function(){
        console.log(`${this.firstName}`);
    }
};

User.firstName = 'John';
User.show();
console.log(`User:${User.firstName}`);

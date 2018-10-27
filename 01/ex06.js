"use strict"


function createUser(user,plan = 'developer'){
    if( typeof user !== 'string' ){
        throw Error('Missing parameter:user');
    }


    console.log(`User: ${user} plan:${plan}`);
}

let plan;
let user;

//createUser(user, 'professional');
createUser('Anna', 'professional');
createUser('John');
createUser('Peter',plan);
createUser('Martin', null);

//Лош дизайн
function foo( a, b=1, c){
    console.log(`a=${a} b=${b} c=${c}`);
}

let x;
foo(1,5,10);
foo(1,x,10);
//c = undefined
//foo(1,10);
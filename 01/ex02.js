"use strict"

//Глобална променлива
let message = 'Hello Nodejs';

function showMessage(){
    //Локална променлива
    let a = 10;

    if(true){
        //Локална променлива
        let b = 1;
        console.log('1. b=', b, ' а=',a);
    }
    console.log(message);
    console.log('2. a=',a);
    //Грешка! b не се вижда тук
    //console.log('2. a=',a ' b=',b);

}


showMessage();
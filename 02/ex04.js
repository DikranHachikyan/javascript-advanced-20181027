x = 10;
console.log(`x=${x}`);

//IIFE

(function(message){
    "use strict";
    console.log(`message:${message}`);
})('Hello IIFE');


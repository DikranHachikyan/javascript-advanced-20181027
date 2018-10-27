"use strict"

const array = [12,2,3,4,5];


const suma = (a,b,c)=>a + b + c;

console.log('suma=', suma(array[0],array[1],array[2]));
console.log('suma=', suma( ...array));


const nums = [100, ...array, 200];

console.log('nums:', nums);
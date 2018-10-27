"use strict"

const array = [12,2,3,10,5,6];

const n = array.filter(function(value,index){
    console.log(`value=${value} index=${index}`);
    return (value % 2) === 0;
});

console.log('n:',n);
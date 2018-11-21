'use strict';

const values = [1, 2, 3, 4, 5, 6, 7, 8];

const sum = values
                .filter( (value)=>(value % 2) === 0)
                .map( (value)=> value * 2)
                .filter((value)=>(value % 3) !== 0)
                .reduce((acc, cur)=>acc + cur, 0);

console.log('sum=', sum);
console.log('values=', values);
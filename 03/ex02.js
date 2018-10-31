"use strict";
function showMessage(message) {
    console.log(`Message:${message}`);
}
//let x:any = showMessage('Hello TS');
function throwError(message) {
    throw Error(message);
}
function sum(a, b) {
    return (a + b);
}
//throwError('Invalid Parameter');
showMessage('Hello TS!');
let s = sum(1, 5);
console.log(`s=${s}`);
//let n:string = '12';
//let val:number = <number>n;
//let val:number   = n as number;

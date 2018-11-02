
function showMessage(message:string):void{
    console.log(`Message:${message}`);
}

//let x:any = showMessage('Hello TS');

function throwError(message:string):never{
    throw Error(message);
}

function sum(a:number, b:number):number{
    return (a + b);
}

//throwError('Invalid Parameter');
showMessage('Hello TS!');

let s:number = sum(1,5);
console.log(`s=${s}`);

let n:string = '12';

let val:number = parseInt(n);
//let val:number   = n as number;


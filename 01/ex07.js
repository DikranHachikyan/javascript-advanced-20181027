"use strict"


function *generateNumbers(){
    let i = 0;
    while( true ){
        i++;
        yield i * Math.random();
        console.log(`after yield i = ${i}`);
    }
}

const nums = generateNumbers();

console.log('value = ', nums.next());
console.log(`value = ${ nums.next().value}`);
console.log(`value = ${ nums.next().value}`);
console.log(`value = ${ nums.next().value}`);
console.log(`value = ${ nums.next().value}`);
console.log(`value = ${ nums.next().value}`);
nums.return();
console.log('value = ', nums.next());




console.log('start');

setTimeout(()=>console.log('set timeout next tick'),1);

process.nextTick(()=>{
    console.log('next tick callback');
});
console.log('end');

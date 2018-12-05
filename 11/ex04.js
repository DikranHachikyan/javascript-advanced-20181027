//const exec = require('child_process').exec;
//ES6
const {exec} = require('child_process');

const child = exec('cat *.js output|wc',{
    cwd:'../10/'
}, (error,stdout,stderr)=>{
    console.log('child stdout',stdout);
    console.log('child stderr',stderr);
    if(error){
        console.log(`Error:${error}`);
    }
});

console.log(`Main PID:${process.pid}`);
console.log(`Child PID:${child.pid}`);

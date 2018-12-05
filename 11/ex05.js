//const exec = require('child_process').exec;
//ES6
const {exec} = require('child_process');

const tail = exec('tail -f output',{
    cwd:'./'
});

tail.stdout.on('data', (data)=>{
    process.stdout.write(data);
});

console.log(`Main PID:${process.pid}`);
console.log(`Child PID:${tail.pid}`);

const {spawn} = require('child_process');
const {openSync} = require('fs');

const out = openSync('./timer_out','a');
const err = openSync('./timer_err','a'); 

const timer = spawn('node',['./children/timer.js'],{
    stdio:['ignore', out, err],
    detached:true
});

// process.stdout.on('data',(data)=>{
//     process.stdout.write(`timer:${data}`);
// });
timer.unref();
const {fork} = require('child_process');

const forked = fork('./children/child.js');

forked.on('message', (message)=>{
    if(message.text !== undefined && message.text === 'quit'){
        process.stdout.write(`${message.child} terminated\n`);
        process.exit(0);
    }
    process.stdout.write(`child:${message.child} counter:${message.counter}\n`);
});

forked.send({text:'Hello child!'});

// process.stdin.on('data',(data)=>{
//     forked.send({text:data.toString()});
// });
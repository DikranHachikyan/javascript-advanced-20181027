const {createServer} = require('http');
const {fork} = require('child_process');

const server  = createServer();

server.listen(3000,console.log('listen on port 3000'));


server.on('request', (req,res)=>{
    if(req.url === '/calc'){
        const calc = fork('./children/sum.js');
        calc.send('start');
        calc.on('message',(message)=>{
            res.write(`sum is ${message.result}`);
            res.end();
        });
        return;
    }
    res.end('Ok!!');

});


const {spawn} = require('child_process');

const tail = spawn('tail',['-f','output']);

tail.stdout.on('data', (data)=>{
    console.log(data.toString());
});
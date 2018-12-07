const {spawn} = require('child_process');

const ls = spawn('ls',['-l','../11/']);
const wc = spawn('wc');

ls.stdout.pipe(wc.stdin);

wc.stdout.on('data',(data)=>{
    console.log(data.toString().trim());
    //process.stdout.write(data);
});

wc.stderr.on('data',(data)=>{
    process.stdout.write(`Error (wc):${data}`);
})


process.stdout.write(`Child PID:${process.pid}\n`);

const data = {
     child:'first'
   , pid:process.pid
   , counter: 0
   , text:'' 
};

const interval = setInterval(()=>{
    data.counter++;
    process.send(data);
    if( data.counter > 20){
        clearInterval(interval);
        data.text = 'quit';
        process.send(data);
    }
},2000);

process.on('message',(message)=>{
    process.stdout.write(`from parent:${message.text}\n`);
});
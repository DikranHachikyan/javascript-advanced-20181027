let counter = 0;

process.stdout.write(`Child PID:${process.pid}\n`);

const interval = setInterval(()=>{
    if( ++counter > 10 ){
        clearInterval(interval);
        process.exit(0);
    }
    process.stdout.write(`counter:${counter}\n`);
},2000);
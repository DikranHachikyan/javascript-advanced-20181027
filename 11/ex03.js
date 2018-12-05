let sym = '.';



process.on('SIGINT', ()=>{
    process.stdout.write(`Ctrl+C not permitted`);
});

process.on('SIGHUP', ()=>{
    process.stdout.write('reload config file');
});

// process.on('SIGKILL', ()=>{
//     process.stdout.write('sigkill received');
// });

process.stdout.write(`PID:${process.pid} Running`);
setInterval(()=>{
    sym += '.';
    process.stdout.write(sym);
}, 2000);


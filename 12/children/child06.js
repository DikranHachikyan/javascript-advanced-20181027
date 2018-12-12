if( process.argv.length < 4 ){
    throw Error('Usage: script param1 param2');
}

let progress = process.argv[2], //символ
    time     = process.argv[3],
    sym      = progress;


const interval = setInterval( ()=>{
    progress +=sym;
    //process.stdout.write(`length:${progress.length} ${progress}`);

    process.send({  pid:process.pid
                  , done: Math.ceil(progress.length/20 * 100)
    });

    if( progress.length >= 20 ){
        //console.log('exit')
        clearInterval(interval);
    }
}, time);

process.on('message', (data)=>{
      if( data === 'quit'){
         process.exit(0);
      }
});
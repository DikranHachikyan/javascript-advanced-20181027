
process.stdin.setEncoding('utf8');

process.stdin.on('data',(chunk)=>{
    if( chunk === 'quit\n'){
        process.exit(0);
    }
    process.stdout.write(`data:${chunk}`);
});

process.on('exit',(code)=>{
    if( code === 0){
        console.log('exit status:Ok!');
    }
});
const {createServer} = require('net');

const server = createServer((socket)=>{
    process
        .stdout
        .write(`\nConnection from ${socket.remoteAddress}:${socket.remotePort}`);
    //socket on data
    socket.on('data', (buffer)=>{
        let buff = buffer.toString('UTF-8');
        console.log(buffer);
        process
            .stdout
            .write(`\nReceived ${buffer.length} Bytes ${buff}`);

        socket.write(`received:${buff}`);
        socket.write('>');
        //if( buff === 'quit\r\n'){
        if( buff.startsWith('quit')){
            socket.end();
        }

    });
    //end socket on data

    //socket on end
    socket.on('end', ()=>{
        process
            .stdout
            .write(`\n${socket.remoteAddress}:${socket.remotePort} disconnected`);
    });

    socket.on('close', ()=>{
        process
            .stdout
            .write(`\nSocket Closed!`);
    });
});

const options = {
      //host:'127.0.0.1' 
      host:'web-dev'
    , port:3000  //портове от 0-1023 изискват админ. права
};

server.listen( options , ()=>{
    process.stdout.write(`\nListen on ${options.host}:${options.port}`);
});
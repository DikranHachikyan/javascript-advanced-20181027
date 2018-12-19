const {createServer} = require('net');

const sockets = [];

const server = createServer();


server.on('connection', (socket)=>{
    process
        .stdout
        .write(`Connection from ${socket.remoteAddress}:${socket.remotePort}\n`);

    sockets.push(socket);
    //1.в началото на връзката
    socket.once('data', (buffer)=>{
        socket.username = buffer.toString('UTF-8');
        sendMessage( socket, `${socket.username} joined the chat`);
    });//once on data
});

const options = {
      host:'127.0.0.1' 
      //host:'web-dev'
    , port:3000  //портове от 0-1023 изискват админ. права
};

server.listen( options , ()=>{
    process.stdout.write(`\nListen on ${options.host}:${options.port}`);
});


const sendMessage = (sender, message)=>{
    sockets.forEach( (socket)=>{
        if( socket === sender) return;
        socket.write(message);
    });//for each socket in sockets
};//send message to all
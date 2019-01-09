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
        //2.за останалите съобщения
        socket.on('data',(buffer)=>{
            let data = buffer.toString('UTF-8');
            let msgObj = JSON.parse(data);
            if( msgObj.message === '[who]'){
                listUsers(socket);
                return;
            }
            sendMessage(socket,`${socket.username} says:${msgObj.message} (${msgObj.stamp})`);
        });//on data
    });//once on data
    //3.при напускане на чата
    socket.on('end',()=>{
        sockets.splice(sockets.indexOf(socket),1);
        sendMessage(socket,`${socket.username} left the chat`);
    });//on end connection
});

const options = {
      host:'127.0.0.1' 
      //host:'web-dev'
    , port:3000  //портове от 0-1023 изискват админ. права
};

server.listen( options , ()=>{
    process.stdout.write(`\nListen on ${options.host}:${options.port}\n`);
});


const sendMessage = (sender, message)=>{
    sockets.forEach( (socket)=>{
        if( socket === sender) return;
        socket.write(message);
    });//for each socket in sockets
};//send message to all

const listUsers = (sender)=>{
    let userList = '\n';
    sockets.forEach((socket)=>{
        if(socket === sender) return;
        userList += `* ${socket.username}\n`;
    });
    sender.write(userList);
};
const {Socket} = require('net');
const {createInterface} = require('readline');

const client = Socket();
const readLine = createInterface(process.stdin, process.stdout);


client.setEncoding('UTF-8');

readLine.question('User Name:', (username)=>{

     console.log(`Hello ${username}`);
     
     client.connect(3000, '127.0.0.1', ()=>{
        client.write(username);
        readLine.setPrompt('>>');
        readLine.prompt();

        readLine.on('line', (line)=>{
            if( line === '[quit]'){
                client.end();
                readLine.close();
                return;
            }

            const msg = JSON.stringify({message:line, stamp: new Date()});
            client.write(msg);
            readLine.prompt();
        });//on line
        
     });
     

});//question

//Клиентът получава данни

client.on('data', (buffer)=>{
    process.stdout.write(`\n>>${buffer.toString('UTF-8')}`);
});//on data

client.on('close', ()=>{
    process.stdout.write(`\nConnection closed!`);
});//on close
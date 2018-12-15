const {open,stat,read} = require('fs');
const filename = './data-files/lorem.txt';

open(filename,'r', (err, fd)=>{
    console.log(`File Descriptor:${fd}`);

    stat(filename, (err,stats)=>{
        if(stats.isFile()){
            console.log(`${filename} is file`);
        }
        console.log('stats:',stats);
        let buffer = Buffer.alloc(stats.size);
        read( fd, buffer, 0, buffer.length, null, (err,bytesRead,buffer)=>{
            let data = buffer.toString('UTF-8');
            console.log(`Bytes Readed:${bytesRead}`);
            console.log(data)
        });
    });//stat
});
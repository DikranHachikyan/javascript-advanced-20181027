const {createReadStream,
       createWriteStream }  = require('fs');
const srcFileName = './data-files/lorem-stream.txt';
const dstFileName = './data-files/lorem-stream-ws.txt';

const options = {
      encoding:'UTF-8'
    , highWaterMark:200
};

const readStream = createReadStream(srcFileName,options);

const writeStream = createWriteStream(dstFileName);

readStream.pipe(writeStream);

readStream.on('data', (chunk)=>{
    process.stdout.write(`\n --chunk-- ${chunk.length} Bytes`);
    readStream.pause();
    setTimeout(()=>readStream.resume(),1000)
});

readStream.on('end', ()=>{
    process.stdout.write(`\n Reading Finished:${readStream.bytesRead}\n`);
});
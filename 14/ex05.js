const {createReadStream}  = require('fs');
const filename = './data-files/lorem-stream.txt';

const options = {
      encoding:'UTF-8'
    , highWaterMark:200
};

const readStream = createReadStream(filename,options);

readStream.on('data', (chunk)=>{
    process.stdout.write(`\n --chunk-- ${chunk.length} Bytes`);
    readStream.pause();
    setTimeout(()=>readStream.resume(),1000)
});

readStream.on('end', ()=>{
    process.stdout.write(`\n Reading Finished:${readStream.bytesRead}\n`);
});
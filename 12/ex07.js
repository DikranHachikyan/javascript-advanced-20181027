const {EventEmitter} = require('events');
const {inherits} = require('util');

function UploadManager(){
    let _this = this;

    console.log('Upload Manager');

    this.upload = (url)=>{
        let progress  = 0,
            fileSize = 0;

        console.log(`Upload started ${url}`);
        const progressInterval = setInterval(()=>{
            progress += 20;
            fileSize += 50;

            _this.emit('progress', {progress, 'size':fileSize});

            if( progress === 100 ){
                clearInterval(progressInterval);
                _this.emit('end', fileSize);  
            }
            
        },1000);
    };
}


inherits(UploadManager, EventEmitter);

const uploader = new UploadManager();

uploader.upload('movie.mp4');

uploader.on('progress',(data)=>{
    process.stdout.clearScreenDown();
    process.stdout.cursorTo(0);
    process.stdout.write(`Progress:${data.progress} size:${data.size}`)
});

uploader.on('end', (data)=>{
    process.stdout.write(`\nUploaded ${data} bytes\n`);
});


process.stdin.on('data',(data)=>{
    console.log(data);
})
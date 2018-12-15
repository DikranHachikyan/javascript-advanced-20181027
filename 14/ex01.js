const {readdir} = require('fs');

readdir('../12/', (err, files)=>{
    if(err) throw err;
    console.log(files);
});

console.log('Read Directory ../12/');
const {  readdirSync
       , statSync } = require('fs');
const {join}        = require('path');

//console.log(join('www','src','files','index.html'));
 const readDirectory = (dir,level='')=>{
     let files = readdirSync(dir);

     files.forEach( (fileName)=>{
         let file = join(dir,fileName);
         let stats = statSync(file);
         if ( stats.isFile() ) {
            console.log(`${level}${fileName} perms:${( stats.mode & 0777).toString(8)} perms:${stats.mode}`);
         }
         else if( stats.isDirectory()){
            console.log(`dir:${file}`);
            //рекурсивно извикване на функцията 
            //(функцията вика себе си)
            readDirectory(file, `${level}-`);
         }
     });//for each
 };

readDirectory('../12');
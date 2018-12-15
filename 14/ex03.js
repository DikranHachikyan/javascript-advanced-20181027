const {readFile} = require('fs');
const filename = './data-files/data.json';


readFile(filename, 'UTF-8', (error, content)=>{
    let json = JSON.parse(content);

    json.forEach((el)=>{
        //console.log(el);
        console.log(`Category:${el.title}`); 
    });
});
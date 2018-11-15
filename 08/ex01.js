'use strict';

//Callback

function sendRequest(url, callback){
    console.log(`send request to ${url}`);
    setTimeout(()=>{
        let categories = [
            {id:1, name:'Mobile Phones', slug:'mobile-phones'},
            {id:2, name:'Digital Cameras', slug:'digital-cameras'}
        ];
        if( url.indexOf('categories') !== -1){
            callback(categories);
        }
        else if( url.indexOf('mobile-phones') !== -1){
            callback({phones:['Samsung', 'Nokia','Lg']});
        }
        else if( url.indexOf('digital-cameras') !== -1){
            callback({cameras:['Cannon','Sony','Nikon']});
        }

    }, 1000 * Math.random());
}


console.log('before send request');
sendRequest('/categories/', (data)=>{
    console.log('process data');
    for( let category of data){
        sendRequest(category.slug, (data)=>{
            console.log(`process data in category:${category.name}`);
            console.log('items:', data);
        });
    }
});
console.log('after send request');

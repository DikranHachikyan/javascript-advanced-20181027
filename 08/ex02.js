'use strict';

//Callback

function sendRequest(url){
    return new Promise((resolve,reject)=>{
        console.log(`send request to ${url}`);
        setTimeout(()=>{
            let categories = [
                {id:1, name:'Mobile Phones', slug:'mobile-phones'},
                {id:2, name:'Digital Cameras', slug:'digital-cameras'}
            ];
            if( url.indexOf('categories') !== -1){
                resolve(categories);
            }
            else if( url.indexOf('mobile-phones') !== -1){
                resolve({phones:['Samsung', 'Nokia','Lg']});
            }
            else if( url.indexOf('digital-cameras') !== -1){
                resolve({cameras:['Cannon','Sony','Nikon']});
            }
            else {
                reject(`Invalid url:${url}`);
            }

        }, 1000 * Math.random());
        
    });//new Promise
}


console.log('before send request');
sendRequest('/categories/')
.then((data)=>{
    console.log('data 1:', data);
    let proms = data.map((category)=>sendRequest(`/${category.slug}/`));
    return Promise.all(proms);
})
.then((data)=>{
    console.log('data 2:', data);
})
.catch((error)=>console.log(error));
console.log('after send request');

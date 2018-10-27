"use strict"

const app_config = {
    title: 'Web App',
    url  : 'http://localhost',
    path : '/site/'
};

console.log(app_config);

app_config.title = 'Blog';

console.log(app_config);

app_config.imagePath = '/images/';

console.log(app_config);

delete app_config.url;

console.log(app_config);

app_config = {
    width:900,
    height:600
};
console.log(app_config);
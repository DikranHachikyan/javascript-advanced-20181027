"use strict"

const title = 'Web App';

let x = 5,
    y = 6;

let output = `<h1>${title}</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic recusandae 
cumque quod! Aliquam consequuntur reprehenderit ducimus ullam! Est in, porro 
ad odio, voluptate, ea quae doloremque eveniet accusantium, accusamus quos!
</p>
<div>x + y = ${x + y}</div>
<div>Random Number: ${Math.random() * 100}</div>`;

console.log(output);
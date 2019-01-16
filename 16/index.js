import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import {routes} from './src/routes';

const PORT = process.env.PORT || 3000;
const HOST = '127.0.0.1';



const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//Mongoose
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/contacts',{useNewUrlParser: true});

routes(app);
//app.get('/', (req,res,next)=>{
//    //res.send(`<h1>Express Web App ${HOST}:${PORT} 1</h1>`);
//    console.log('Process data...');
//    next();
//});

//Middleware
//app.use('/',(req,res,next)=>{
//    console.log('my middleware');
//    next();
//});

app.get('/', (req,res,next)=>{
    res.send(`<h1>Express Web App ${HOST}:${PORT} 2</h1>`);
});


app.listen( PORT, HOST, ()=>{
    process.stdout.write(`Listen on ${HOST}:${PORT}...\n`);
});
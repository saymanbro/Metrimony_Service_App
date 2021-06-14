import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import Users from './Router/router.js';

import "./DB/db.js";
const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(bodyParser.json({limit:"30mb", extended:true}));
app.use(bodyParser.urlencoded({ limit:"30mb", extended:true}));


app.use('/bio', Users)
app.get('/', (req,res)=>{
    res.send('Welcome to Matrimony Service')
})
app.listen(PORT, ()=>{
    console.log('port running on' +PORT);
});
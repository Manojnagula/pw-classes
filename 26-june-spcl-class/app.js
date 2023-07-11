import express from 'express';

const app = express();

app.get('/',(req,res)=>{
    res.send('<h1>home page</h1>');
})

app.get('/about',(req,res)=>{
    res.send('<h1>about page</h1>');
})

app.get('/contact',(req,res)=>{
    res.send('<h1>contact page</h1>');
})

export default app;
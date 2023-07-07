const express = require('express');

const PORT = 4006;
const app = express()

const hostname = 'localhost';

app.get('/',(req,res)=>{
    res.send('<h1 style="color: red;">hello world</h1>');
});
app.get('/about',(req,res)=>{
    res.send('<h3 style="color: red;">about page!</h3>');
});
app.get('/contact',(req,res)=>{
    res.send('<h2 style="color: purple">contact page!</h2>');
});
app.listen(PORT,()=>{
    console.log(`server running on ${hostname}:${PORT}`);
})

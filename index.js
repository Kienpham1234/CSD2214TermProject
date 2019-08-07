var express = require('express');
var app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(function(req,res,next){
    console.log("Iam in the middle");
    console.log(req.body);
    next();
})

app.get('/',function(req,res){
    console.log(req.body)
res.send('<h1>Hello World</h1>')
})
app.post('/',function(req,res){
    console.log(req.body)
    res.send('POST sent')
    })
app.put('/',function(req,res){
    res.send('PUT sent')
    })
app.delete('/',function(req,res){
    res.send('DELETE sent')
    })
app.listen(3000)
const http = require('http');
const site = http.createServer(function(req,res){
    console.log('Hello World');
    console.log(req.headers);
    console.log(req.url);
    res.setHeader('Content-type','application/json');
    console.log(req.rawHeaders);
    res.write('<h1>Hello Class</h1>');
    res.end();
})
site.listen(3000);
const http = require('http');
const data = {
firstName:'Laurence',
lastName :'Svekis'
}

const site = http.createServer(function(req,res){
console.log('Hello World');
console.log(req.headers);
console.log(req.url);
res.setHeader('Content-Type','application/json');
//res.setHeader('Content-Type','text/html');
//res.write('fh');
res.write(JSON.stringify(data)); 
res.end();
})
site.listen(3000);
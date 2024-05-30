let htpp = require("http");
let url = require("url");

htpp.createServer(function(req,res){
let request = url.parse(req.url,true);
let pathName = request.pathname;

let num1 = parseInt(request.query.num1);
let num2 = parseInt(request.query.num2);

let result = 0;

switch(pathName){
    case "/jam":{
        result = num1 + num2;
        break;
    }
    case "/tafrigh":{
        result = num1 - num2;
        break;
    }
    case "/zarb":{
        result = num1 * num2;
        break;
    }
    case "/taghsim":{
        result = num1 / num2;
        break;
    }
    default:{
        res.end("eshtebah");
    }
}
res.end(result.toString());


}).listen(8585);
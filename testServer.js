const http = require("http");

const server = http.createServer(function(req,res){
    res.setHeader("Content-type","application/json");
    res.setHeader("Access-Control-Allow-Origin","*");
    res.writeHead(200);
    var dataSample={firstName:"Dhivya",lastName:"sri"};
    var dataToSend=JSON.stringify(dataSample);
    console.log("dataToSend",dataToSend)
    res.end(dataToSend);
})


    server.listen("7070",function(){
        console.log("YAY...!!! your server is ready");
    });
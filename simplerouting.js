const http=require('http');
const server=http.createServer(req,res)=>{
    res.setheader('content-type','text/plain');
    if(req.url==='/home'){
        res.statuscode=200;
        res.end("welcome to home");
    }
    else if(req.url==='/about')
        {
            req.status code=200;
            res.end('about us');
        }
        else{
            res.statuscode=404;
            res.end('page not found');
        }
    

};
server.listenerCount(300,()=>{
    console.log("server running at http://localhost3000");
});

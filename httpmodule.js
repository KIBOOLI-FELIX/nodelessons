const http=require("http");
const server=http.createServer((request,response)=>{
// console.log(request);
if(request.url==="/"){
  response.end("God is Great, He is from everlasting to everlasting");
}
 if(request.url==="/about"){
  response.end("God has neither end nor beginning of days");
}

response.end("<p style='color:red'>Sorry we cant find the page you are looking for</p><a href='/'>Back</a>");

})

server.listen(5000);
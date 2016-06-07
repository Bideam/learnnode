var http=require("http"),
	server,
	//定义常量表示一个响应OK的http状态码
	HTTP_OK=200,
	//定义一个端口
	PORT=8000;

	server=http.createServer(function (request,response){
		response.writeHead(HTTP_OK,{"Content-Type":"text/html"});
		response.write("<h1>hello,world</h1>\n");
		response.end();
	})

	server.listen(PORT);
	console.log("now try browsing http://127.0.0.1:"+PORT);
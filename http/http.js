var http=require('http');
var fs=require('fs');
var server=http.createServer(function(req,res){
	if (req.url!=="./favicon.ico") {
		var out =fs.createWriteStream('./request.log');
		out.write('客户端请求所用的方法'+req.method+'\r\n');
		out.write('客户端请求所用的url字符串为'+req.url+'\r\n');
		out.write('客户端请求头对象为'+JSON.stringify(req.headers)+'\r\n');
		out.end('客户端请求所用的http版本'+req.httpVersion);
		req.on('data',function(data){
			console.log('服务器端接收数据：'+decodeURIComponent(data));
		});
		req.on('end',function(){
			console.log('客户端接收数据完毕');
		});
	}
	res.end();
}).listen(1337,'localhost',function(){
	console.log('服务器端开始监听');
});

server.on('error',function(e){
	if (e.code=='EADDRINUSE') {console.log('服务器端口已被占用。');}
});

/*setTimeout(function(){
	console.log('即将关闭服务器');
	server.close();
},5000);*/
server.on('close',function(){
	console.log('服务器已关闭');
});

server.on('connection',function(socket){
	console.log('客户端连接已建立');
	socket.on('data',function(data){
		console.log(data.toString());
	})
});
var net=require('net');
var server=net.createServer(function (socket) {
	console.log('客户端与服务器端连接已建立');
	server.getConnections(function(err,count){
		console.log('当前存在%d个客户端连接',count);
		server.maxConnections=5;
		console.log('最多接受%d个客户端连接',server.maxConnections);
	});
	
	// body...
});

server.listen(8431,'localhost',function(){
	console.log('服务器端开始监听');
	address=server.address();
	console.log('被监听的地址信息为%j',address);
});

server.on('error',function(e){
	console.log(e);
	server.destroy();
})

server.on('connection',function(socket){
	socket.on('data',function(data){
		console.log(data.toString());

	});
	socket.on('end',function(){
		console.log('客户端已关闭');

	});
	setTimeout(function(){
	socket.write('即将关闭服务器端');
	server.close('close');
	console.log('服务器端已关闭');
},10000);
});




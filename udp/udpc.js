var dgram=require('dgram');
var message=new Buffer('你好。');
var client=dgram.createSocket('udp4');
client.send(message,0,message.length,41234,"localhost",function(err,bytes){
	if(err) console.log('发送数据失败。失败原因%s',err);
	else console.log('发送数据成功，已发送%d字节数据',bytes);
});
client.on("message",function(msg,rinfo){
	console.log("已接收服务器端发送的数据:%s",msg);
	console.log("服务器地址为%s",rinfo.address);
	console.log("服务器所用端口%s",rinfo.port);
});


setInterval(function(){
	client.send(message,0,3,41234,"localhost",function(err,bytes){
		var msg_get=0;
		client.on("message",function(msg,rinfo){
			msg_get=msg;
		});
		if (msg_get==0) {
			console.log('连接服务器失败');
			client.close();
		}
		else console.log('保持连接');
	});
},5000);
var net=require('net');
var client=new net.Socket();
client.setEncoding('utf8');
client.connect(8431,'localhost',function () {
	console.log('你已连接到服务器端');
	client.write('你好');
	setTimeout(function(){
	client.end('close');
	console.log('客户端端已关闭')
},10000);
	// body...
});
client.on('data',function(data){
	console.log('已接受到服务器端数据:'+data);

});

client.on('error',function(err){
	console.log(err);
	client.destroy();
});
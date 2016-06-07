var http=require('http');
/*http.createServer(function (req,res) {    //createServer方法将返回被创建的http对象
	res.writeHead(200,{'Content-Type': 'text/html'}); //通过写writeHead方法写响应头
	res.write('<head><meta charset="utf-8" /></head>');
	res.end('你好\n');
	// body...
}).listen(1337,"127.0.0.1");*/
console.log('Server running at http://127.0.0.1:1337/');
var user=new Object();
user.name='bdieakd';
user.getName=function (){return user.name;};
user.setName=function (name){this.name=name;};
console.dir(user);    //console.dir用于查看一个对象中的内容

var testModule=require('./testModu.js');
console.log(testModule.testVar);

var server=http.createServer();
server.on('request',function(req,res){
	if(req.url!=="/favicon.ico"){
		console.log(req.url);}
	res.end();

});
server.on('request',function(req,res){
	if (req.url!=="songthon") {
		console.log("receive the request");
	}
	res.end();
});
server.listen(1337,"127.0.0.1");

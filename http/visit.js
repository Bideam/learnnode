var http=require('http');
var url=require('url');

var options={
	hostname:'www.ourob.cn',
	port:80,
	path:'/',
	method:'GET'
};

var req=http.request(options,function(res){
	console.log('状态码：'+res.statusCode);
	console.log('响应头：'+JSON.stringify(res.headers));
	res.setEncoding('utf8');
	res.on('data',function(chunk){
		console.log('响应内容：'+chunk);
	});
});

req.on('error',function(err){
	console.log('在请求数据过程中发生错误，错误代码为：'+err.code);
});
req.end();

//创建一个代理服务器
var server=http.createServer(function(sreq,sres){
	var url_parts=url.parse(sreq.url);
	var opts={
		host:'www.amazon.cn',
		port:80,
		path:url_parts.pathname,
		headers:sreq.headers
	};
	var creq=http.get(opts,function(cres){
		sres.writeHead(cres.statusCode,cres.headers);
		cres.pipe(sres);

	});
	sreq.pipe(creq);

});
server.listen(1337,'127.0.0.1');
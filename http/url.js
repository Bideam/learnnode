var http=require('http'),
	url=require('url');
var server=http.createServer(function(req,res){
		res.setHeader("Content-Type","text/plain");
		res.setHeader("Access-Control-Allow-Origin",'*');
		res.writeHead(200,{'Content-Type':'text/plain',
		'Access-Control-Allow-Origin':'*'
		});
		res.write('nihao');
	
	res.end();
}).listen(1337,'localhost');
/*server.on('request',function(req,res){
	if (req.url!=='/favicon.ico') {
		res.write('<html><head><meta charset="utf-8"/></head>');
		var url_parts=url.parse(req.url);
		switch(url_parts.pathname){
			case '/':
			case '/index.html':
				res.write('<body>您当前正访问页面首页。</body></html>');
				break;
			default:
				res.write('<body>您当前访问的页面为'+url_parts.pathname+'.</body></html>');
		}

		res.writeHead(200,{'Content-Type':'text/plain',
		'Access-Control-Allow-Origin':'http://localhost'
		});
		res.setHeader("Content-Type","text/plain");
		res.setHeader("Access-Control-Allow-Origin","http://localhost");
		res.write('nihao');
	}
	res.end();
})*/
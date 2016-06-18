//router 只有一个if  或者else囖   =-=
function route(handle,pathname,response,request)

{
	console.log("请求"+pathname);
	if(typeof handle[pathname] === 'function'){
		handle[pathname](response,request);
	}else{
		console.log("error");
		response.writeHead(404, {"Content-Type": "text/html"});
        response.write("404 Not found");
        response.end();
	}
}

exports.route=route;
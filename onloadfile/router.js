//router ֻ��һ��if  ����else��   =-=
function route(handle,pathname,response,request)

{
	console.log("����"+pathname);
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
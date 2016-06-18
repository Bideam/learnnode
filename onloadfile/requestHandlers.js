var fs = require("fs");
var formidable = require("formidable");
var mysql = require("mysql");//使用mysql模块


//开始的方法，返回一个登录页面
function start(response)
{
	fs.readFile("./index.html",function(err,html)
	{
		if(err)
		{
			throw err;
		}
		else
		{
	    response.writeHead(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
        console.log(html);
		}
	});
}

function login(response,request)
{
var connection = mysql.createConnection({
    host: 'localhost',//主机地址，默认localhost
    user: 'root',//用户名
    password: '012973',//密码
    database:'nodejs',
    port: 3306,//端口号，默认3306
});
	connection.connect();
	//获取到用户输入的学号和姓名喔=-=
	
	var form = new formidable.IncomingForm();
	 form.parse(request,function(error,fields,files){
		 var number=fields.number;
		 var name=fields.name;
		 console.log(number+"_"+name);
	 });
	//验证学号和密码囖
	var selectSQL='select * from nodejs.student where name="周文丹"';
	connection.query(selectSQL, function(err, rows,fields) {
    if (err) throw err;
	if(rows){
	 for (var i in rows) {
                console.log(rows[i].number);
	 }
	 //返回下载页面
	 fs.readFile("./upload.html",function(err,uphtml)
	{
		if(err)
		{
			throw err;
		}
		else
		{
	    response.writeHead(200, {"Content-Type": "text/html"});  
        response.write(uphtml);  
        response.end();  
		}
	});
	 	
	}
	});

//关闭连接
connection.end();
}

function upload(response, request) 
{
	//文件传给服务器，把文件保存到指定的./homework
	//文件重命名，改成学号_姓名.zip
	//返回一个下载的页面
	 var form=new formidable.IncomingForm();//解析表单里面的数据，
     form.uploadDir = "./homework";
	 //功能1 ok
	 
	 //要先文件解析还原,才能得带其上传的路径
	 form.parse(request,function(error,fields,files)
	 {
		 //不知道fields和files是什么 可以打印出来看一看
		console.log(fields);
		console.log(files);//文件上传的
		//对request做解析,然后就不管等待后面的匿名回调函数	 
	 //文件重命名的方法 renameSync
	 var number=fields.number;//在fields字符段里面囖 <input type .. name="number">
	 var name=fields.name;//和自己在表单里面定义的名字一样喔
	 var fileName=number+"_"+name;
	 fs.renameSync(files.upload.path,"./homework/"+fileName);//修改为path2
       //filename=学号加姓名
	 
	 //返回下载的页面
	 response.writeHead(200, {
			"Content-Type" : "text/html"
		});
		
		//var t="<a href='/download?file=test.zip'>test.zip</a>"[html里面的代码];
		var test=fileName;
		var t="<a href='/download?file="+fileName+".zip'>"+fileName+".zip</a>";
		response.write(t);//这里是主要的内容喔 =-=
		response.end();
	 });
	 }
	 
	 function download()
	 {
		 //不管是显示图片还是下载都是一个读取文件的过程，返回给浏览器
		 //fs.readFile(path1,"binary",function(){});路径+二进制方式+回调函数
	     //文件名可以从下载链接包含了文件名，提取识别出来
		 //下载链接的url怎么得到呢=
		 //pathname,url.parse(request.url),pathname;
		 var downloadUrl=url.parse(request.url,true);//注意加个true
		 console.log(downloadUrl);
		 downloadUrl.query;///download?file="+fileName+".zip'  [问号后面的这部分内容捏]
		 console.log(downloadUrl.query);//这部分 file="+fileName+".zip'
		 var fileName=downloadUrl.query.file;
		 fs.readFile("./homework/"+fileName,"binary",function(error,file){
			 //文件读完了之后，产生两个对象
			 if(err)
		{
			throw err;
		}
		else
		{
			 response.writeHead(200,{"Content-Type":
			 "application/zip"});//和前面稍稍不一样  
             response.write(file,"binary");  
             response.end();  
		}
		 });
	 }
exports.start =start;
exports.login =login;
exports.upload=upload;
exports.download=download;
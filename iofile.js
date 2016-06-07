//同步方法立即返回操作结果
var fs =require('fs');
var data= fs.readFileSync('./app.js','utf8');
console.log(data);

//异步方法将操作结果作为回调函数的参数进行返回
var fs1=require('fs');
fs1.readFile('./index.html','utf8',function (err,data){
	console.log(data);
});
//写入文件
fs1.writeFile('./text.txt','这是第一行、\r\n这是第二行',function(err){
	if(err){
		console.log('写入文件失败');

	}
	else console.log('写入文件成功');
});
//打开文件并读取文件内容
fs1.open('./text.txt','r',function(err,data){
	console.log(data);
	var buf =new Buffer(255);
	fs1.read(data,buf,0,9,3,function(err,bytesRead,buffer){
		console.log(buffer.slice(0,bytesRead).toString());
	fs1.close(data);
	});
});

//设立新的目录
fs1.mkdir('./test',function(err){
	if(err){console.log('make a dir fail');}
	else console.log('make a dir success');
});

//获得文件的状态
fs1.stat('./text.txt',function(err,stat){
	console.log(stat);

});

/*fs1.rename('./text.txt','/test/test.txt',function(err){
	if (err) {console.log('移动文件失败');}
	else console.log('移动文件成功');
})*/



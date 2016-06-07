//使用creatreadstream方法读取文件
var fs1=require('fs');
var file=fs1.createReadStream('./text.txt',{start:0});
file.on('open',function(fd){
	console.log('开始读取文件');

});

file.on('data',function(data){
	console.log('读取到数据');
	console.log(data.toString());
});

file.on('end',function(){
	console.log('文件读取完毕');
});

file.on('close',function(){
	console.log('文件已关闭');
});

file.on('error',function(){
	console.log('读取文件失败');
});

//使用creatwritestream写入文件


var wfile=fs1.createWriteStream('./text1.txt');
file.on('data',function(data){
	wfile.write(data);

});

file.on('end',function(){
	wfile.end('\nbye',function(){
		console.log('文件已写入完毕');
		console.log('总共写入了%d的数据',wfile.bytesWritten);
	});
});
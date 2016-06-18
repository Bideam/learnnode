//启动服务器,四大模块
var server=require("./server");
var router=require("./router");
var requestHandlers=require("./requestHandlers");

var handle={}
handle["/start"]=requestHandlers.start;
handle["/upload"]=requestHandlers.upload;
handle["/show"]=requestHandlers.show;
handle["/login"]=requestHandlers.login;
handle["/download"]=requestHandlers.download;
//handle["/an,css"]=requestHandlers.readCss;

server.start(router.route,handle);
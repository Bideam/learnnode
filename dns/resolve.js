var dns=require('dns');
dns.resolve('www.ourob.cn','A',function (e,r) {
	if (e) {console.log(e);}
	else console.log(r);
	// body...
});
dns.reverse('10.1.15.239',function(err,domain){
	if (err) {console.log(err);}
	else console.log(domain);

});
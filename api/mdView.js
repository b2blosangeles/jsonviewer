var url = req.query.md;
if (url) {
	pkg.request(url, function (err, resp, body) {
		
		res.send(resp)
		return true;
		
	  if (err) {
	   res.send(err)
		return
	  }

	   var showdown  = require(env.space_path + '/api/pkg/showdown/node_modules/showdown'),
		converter = new showdown.Converter();
		res.send(converter.makeHtml(body));  
		
		//res.send(body)
	});
} else {
	 res.send('Missing md!');
}

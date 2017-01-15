var url = (req.query.md)?req.query.md:req.post.md;
if (url) {
	pkg.request(url, function (err, resp, body) {
		
		if (resp.statusCode != 200) {
			res.send(url + ' does not exist!');	
			return true;
		} else {
		
			if (err) {
				res.send(err)
				return true;
			}			
			var showdown  = require(env.space_path + '/api/pkg/showdown/node_modules/showdown'),
			converter = new showdown.Converter();
			res.send(converter.makeHtml(body)); 
		}
	});
} else {
	 res.send('Missing md!');
}

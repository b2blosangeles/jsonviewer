var url = (req.query.md)?req.query.md:req.post.md;
url = 'http://google.com';
if (url) {
	var jqdom = require(env.space_path + '/api/jqdom/node_modules/jqdom');
	pkg.request(url, function (err, resp, body) {
		var $ = jqdom(body);
		res.send($('title').text());
	});
} else {
	 res.send('Missing url!');
}
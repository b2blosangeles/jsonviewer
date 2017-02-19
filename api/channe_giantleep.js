var url = (req.query.url)?req.query.url:req.post.url;
url = 'http://giantleap.com/exponential-technologies/';
if (url) {
	pkg.request(url, function (err, resp, body) {
		
		if (resp.statusCode != 200) {
			res.send(url + ' is not accessable!');	
			return true;
		} else {
			res.send(body); 
		}
	});
} else {
	 res.send('Missing url!');
}

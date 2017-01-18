var url = (req.query.url)?req.query.url:req.post.url;
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

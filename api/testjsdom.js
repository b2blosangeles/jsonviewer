pkg.request({ uri:'http://www.google.com' }, function (error, response, body) {  
	var jsdom = require(env.space_path + '/api/pkg/jsdom/node_modules/jsdom');

  if (error && response.statusCode !== 200) {
    res.send('Error when contacting google.com')
  }

  jsdom.env({
    html: body,
    scripts: [
      'http://code.jquery.com/jquery-1.5.min.js'
    ]
  }, function (err, window) {
	  if (err) {
		  res.send('errrr');
	  } else {
		res.send(body);
		return true;		
		var $ = window.jQuery;
		res.send($('body').html());
	  }
  });
});
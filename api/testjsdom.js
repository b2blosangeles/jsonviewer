pkg.request({ uri:'http://www.google.com' }, function (error, response, body) {  
	var jsdom = require(env.space_path + '/api/pkg/jsdom/node_modules/jsdom');

  if (error && response.statusCode !== 200) {
    console.log('Error when contacting google.com')
  }

  jsdom.env({
    html: body,
    scripts: [
      'http://code.jquery.com/jquery-1.5.min.js'
    ]
  }, function (err, window) {
    var $ = window.jQuery;
    console.log($('body').html());
  });
});
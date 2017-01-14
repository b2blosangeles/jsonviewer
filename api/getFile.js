
var showdown  = require(env.space_path + '/api/pkg/showdown/node_modules/showdown'),
    converter = new showdown.Converter(),
    text      = '#hello, markdown!',
    html      = converter.makeHtml(text);
	res.send(html);
/*
pkg.request('http://jsonviewer.qalet.com/README.md', function (err, resp, body) {
  if (err) {
   res.send(err)
    return
  }
  res.send(body);
});
*/
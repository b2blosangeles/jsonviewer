


var opts = {
  url: 'http://jsonviewer.qalet.com/README.md',
  timeout: 60000
}

pkg.request('http://jsonviewer.qalet.com/README.md', function (err, res, body) {
  if (err) {
   res.send(err)
    return
  }
  res.send(body);
});

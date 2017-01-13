


var opts = {
  url: 'http://jsonviewer.qalet.com/README.md',
  timeout: 60000
}

pkg.request(opts, function (err, res, body) {
  if (err) {
   res.send(err)
    return
  }
  res.send(body);
});

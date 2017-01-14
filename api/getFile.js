pkg.request('http://jsonviewer.qalet.com/README.md', function (err, resp, body) {
  if (err) {
   res.send(err)
    return
  }
  res.send(body);
});

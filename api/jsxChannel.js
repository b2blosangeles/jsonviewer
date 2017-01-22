var pp  = require(env.space_path + "/api/pkg/qaletBabel/qaletBabel.js");
var q = new pp();
q.jsx2js(env.space_path+'/a1.jsx', function(err, v) {
	if (err) {
		res.send(err.message);
	} else {
		res.send(v.code);
	}   
});
var Babel  = require(env.space_path + "/api/pkg/qaletBabel/qaletBabel.js");
var qaletBabel = new Babel();

qaletBabel.jsx2js(env.space_path+'/jsx/code/a2.jsx', function(err, v) {
	if (err) {
		res.send(err.message);
	} else {
		res.send(v.code);
	}   
});
var Babel  = require(env.root_path + "/package/qaletBabel/qaletBabel.js");
var qaletBabel = new Babel();

qaletBabel.jsx2js(env.space_path+'/jsx/code/a1.jsx', function(err, v) {
	if (err) {
		res.send(err.message);
	} else {
		res.send(v.code);
	}   
});
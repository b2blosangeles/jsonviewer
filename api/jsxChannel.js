//var Babel  = require(env.root_path + "/package/qaletBabel/qaletBabel.js");
//var qaletBabel = new Babel();

				var b = require(env.root_path + "/package/qaletBabel/node_modules/babel-core").transform('code', {
				  plugins: [env.root_path + '/package/qaletBabel/node_modules/babel-plugin-transform-react-jsx']
				});
res.send('vv');

//var k = qaletBabel.jsx2jsCode(env.space_path+'/jsx/code/a1.jsx', function() {} );
//res.send(k);
/*
qaletBabel.jsx2jsCode(env.space_path+'/jsx/code/a1.jsx', function(err, v) {
	if (err) {
		res.send(err.message);
	} else {
		res.send(v.code);
	}   
});
*/
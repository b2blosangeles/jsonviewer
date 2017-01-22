var Babel  = require(env.root_path + "/package/qaletBabel/qaletBabel.js");
var qaletBabel = new Babel();

var f = qaletBabel.jsx2jsCode(env.space_path+'/jsx/code/a1.jsx');
res.send(f);
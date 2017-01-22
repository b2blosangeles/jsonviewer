res.send(env);
return true;
var pp  = require("./package/qaletBabel/qaletBabel.js");
var q = new pp();
q.jsx2js('a1.jsx', function(err, v) {
        console.log(v.code);
});
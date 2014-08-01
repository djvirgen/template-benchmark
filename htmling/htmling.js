var HTMLing = require('htmling');
var compiled;
var tplData;

module.exports.prepare = function (data, done) {
	compiled = HTMLing.file(__dirname + '/tpl_escaped.html');
	tplData = data;
	done();
};

module.exports.prepareUnescaped = function (data, done) {
	compiled = HTMLing.file(__dirname + '/tpl_unescaped.html');
	compiled.escape = function (x) { return x; }; // no other way to unescape everything by default
	tplData = data;
	done();
};

module.exports.step = function (done) {
	var html = compiled.render(tplData);
	done(undefined, html);
};
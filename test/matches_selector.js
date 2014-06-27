var du = require('../');
var test = require('tape');

test("matchesSelector()", function(assert) {

	var el = document.getElementById('title');

	assert.ok(du.matchesSelector('div h1 span', el));
	assert.notOk(du.matchesSelector('table', el));
	assert.end();

});
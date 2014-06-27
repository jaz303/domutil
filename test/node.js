var du = require('../');
var test = require('tape');

test('isElement()', function(assert) {

	assert.ok(du.isElement(document.body));
	assert.notOk(du.isElement({}));
	assert.end();

});
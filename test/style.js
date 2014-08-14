var du = require('../');
var test = require('tape');

test('style() - key/value', function(assert) {

	var el = document.createElement('div');

	du.style(el, 'color', 'red');

	assert.equal(el.style.color, 'red');
	assert.end();

});

test('style() - object', function(assert) {

	var el = document.createElement('div');

	du.style(el, {
		color: 'blue',
		fontSize: '13px'
	});

	assert.equal(el.style.color, 'blue');
	assert.equal(el.style.fontSize, '13px');
	assert.end();

});

test('style() - px values', function(assert) {

	var el = document.createElement('div');

	du.style(el, 'fontSize', 13);

	assert.equal(el.style.fontSize, '13px');
	assert.end();

});

test('removeStyle()', function(assert) {

	var el = document.createElement('div');

	el.style.color = 'green';

	du.removeStyle(el, 'color');
	
	assert.ok(!el.style.color);
	assert.end();

});
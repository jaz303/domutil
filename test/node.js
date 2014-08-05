var du = require('../');
var test = require('tape');

test('append() - array', function(assert) {

	var el = document.querySelector('#append_array');
	
	du.append(el, [
		document.createElement('div'),
		"<b></b>",
		"foobar!"
	]);

	assert.equal(el.childNodes.length, 4);
	assert.equal(el.childNodes[1].nodeName.toLowerCase(), "div");
	assert.equal(el.childNodes[2].nodeName.toLowerCase(), "b");
	assert.equal(el.childNodes[3].textContent, "foobar!");
	assert.end();

});

test('append() - string HTML', function(assert) {

	var el = document.querySelector('#append_html');
	du.append(el, "<b>BOOM</b>");

	assert.equal(el.childNodes.length, 2);
	assert.equal(el.childNodes[1].nodeName.toLowerCase(), "b");
	assert.end();

});

test('append() - string text', function(assert) {

	var el = document.querySelector('#append_text');
	du.append(el, "bleem");

	assert.equal(el.childNodes.length, 2);
	assert.equal(el.childNodes[1].textContent, "bleem");
	assert.end();

});

test('append() - element', function(assert) {

	var el = document.querySelector('#append_el');
	var div = document.createElement('div');
	du.append(el, div);

	assert.equal(el.childNodes.length, 2);
	assert.equal(el.childNodes[1], div);
	assert.end();

});

test("clear()", function(assert) {

	var el = document.querySelector('#clear');
	
	assert.ok(el.childNodes.length > 0);

	du.clear(el);

	assert.equal(el.childNodes.length, 0);
	assert.end();

});

test('isElement()', function(assert) {

    assert.ok(du.isElement(document.body));
    assert.notOk(du.isElement({}));
    assert.end();

});

test('setContent()', function(assert) {

	var el = document.createElement('div');
	el.innerHTML = '<b>BOOM</b>';

	du.setContent(el, ['<em>foo</em>', 'bar', 'baz']);

	assert.equal(el.childNodes.length, 3);
	assert.equal(el.childNodes[0].nodeName.toLowerCase(), "em");
	assert.equal(el.childNodes[1].textContent, 'bar');
	assert.equal(el.childNodes[2].textContent, 'baz');
	assert.end();


});
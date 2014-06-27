var du = require('../');
var test = require('tape');

function click(el) {
	var evt = new MouseEvent('click', {
		bubbles: true,
	    cancelable: true,
	    view: window
	});
	el.dispatchEvent(evt);
	return evt;
}

test("bind()", function(assert) {

	var el = document.querySelector('#bind a');
	var x = 0;

	du.bind(el, 'click', function(evt) {
		x++;
	});

	click(el);

	assert.ok(x === 1);
	assert.end();

});

test("unbind()", function(assert) {

	var el = document.querySelector('#unbind a');
	var x = 0;

	var fn = du.bind(el, 'click', function(evt) {
		x++;
	});

	du.unbind(el, 'click', fn);

	click(el);

	assert.ok(x === 0);
	assert.end();

});

test("bind_c() - bind", function(assert) {

	var el = document.querySelector('#bind_c_1 a');
	var x = 0;

	du.bind_c(el, 'click', function(evt) {
		x++;
	});

	click(el);

	assert.ok(x === 1);
	assert.end();

});

test("bind_c() - cancellation", function(assert) {

	var el = document.querySelector('#bind_c_2 a');
	var x = 0;

	var cancel = du.bind_c(el, 'click', function(evt) {
		x++;
	});

	cancel();

	click(el);

	assert.ok(x === 0);
	assert.end();

});

test("delegate() - bind", function(assert) {

	var el = document.querySelector('#delegate_1');
	
	var x = 0;
	du.delegate(el, 'click', 'a', function(evt) {
		assert.ok(this === el, "this in delegate == original element");
		x += parseInt(evt.delegateTarget.getAttribute('data-val'));
	});

	click(document.querySelector('#delegate_1 div > :nth-child(1) span'));
	click(document.querySelector('#delegate_1 div > :nth-child(2) span'));
	click(document.querySelector('#delegate_1 div > :nth-child(3) span'));

	assert.ok(x === 5, "x should == 5");
	assert.end();

});

test("delegate() - unbind", function(assert) {

	var el = document.querySelector('#delegate_2');
	
	var x = 0;
	var fn = du.delegate(el, 'click', 'a', function(evt) {
		x += parseInt(evt.delegateTarget.getAttribute('data-val'));
	});

	du.unbind(el, 'click', fn);

	click(document.querySelector('#delegate_2 div > :nth-child(1) span'));
	click(document.querySelector('#delegate_2 div > :nth-child(2) span'));
	click(document.querySelector('#delegate_2 div > :nth-child(3) span'));

	assert.ok(x === 0, "x should == 0");
	assert.end();

});

test("delegate_c() - bind", function(assert) {

	var el = document.querySelector('#delegate_c_1');
	
	var x = 0;
	du.delegate_c(el, 'click', 'a', function(evt) {
		assert.ok(this === el, "this in delegate == original element");
		x += parseInt(evt.delegateTarget.getAttribute('data-val'));
	});

	click(document.querySelector('#delegate_c_1 div > :nth-child(1) span'));
	click(document.querySelector('#delegate_c_1 div > :nth-child(2) span'));
	click(document.querySelector('#delegate_c_1 div > :nth-child(3) span'));

	assert.ok(x === 5, "x should == 5");
	assert.end();

});

test("delegate_c() - unbind", function(assert) {

	var el = document.querySelector('#delegate_c_2');
	
	var x = 0;
	var fn = du.delegate_c(el, 'click', 'a', function(evt) {
		x += parseInt(evt.delegateTarget.getAttribute('data-val'));
	});

	fn();

	click(document.querySelector('#delegate_c_2 div > :nth-child(1) span'));
	click(document.querySelector('#delegate_c_2 div > :nth-child(2) span'));
	click(document.querySelector('#delegate_c_2 div > :nth-child(3) span'));

	assert.ok(x === 0, "x should == 0");
	assert.end();

});

test("stop()", function(assert) {

	var el = document.querySelector('#stop');
	var outer = el.querySelector('a');
	var inner = el.querySelector('span');

	var x = 0;
	du.bind(outer, 'click', function(evt) { x++; });
	du.bind(inner, 'click', function(evt) { du.stop(evt); });

	var evt = click(inner);
	assert.ok(evt.defaultPrevented);
	assert.ok(x === 0);
	assert.end();

});
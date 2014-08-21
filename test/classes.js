var du = require('../');
var test = require('tape');

test("hasClass()", function(assert) {

    var el = document.createElement('div');
    el.className = 'foo baz';

    assert.ok(du.hasClass(el, 'foo'));
    assert.notOk(du.hasClass(el, 'bar'));
    assert.ok(du.hasClass(el, 'baz'));
    assert.end();

});

test("addClass()", function(assert) {

    var el = document.createElement('div');

    du.addClass(el, 'foo bar baz');

    assert.ok(du.hasClass(el, 'foo'));
    assert.ok(du.hasClass(el, 'bar'));
    assert.ok(du.hasClass(el, 'baz'));
    assert.end();

});

test("removeClass()", function(assert) {

    var el = document.createElement('div');
    el.className = 'foo bar baz';

    du.removeClass(el, 'foo bar baz');

    assert.notOk(du.hasClass(el, 'foo'));
    assert.notOk(du.hasClass(el, 'bar'));
    assert.notOk(du.hasClass(el, 'baz'));
    assert.end();

});

test("toggleClass()", function(assert) {

    var el = document.createElement('div');
    el.className = 'foo baz';

    du.toggleClass(el, 'foo bar baz');

    assert.notOk(du.hasClass(el, 'foo'));
    assert.ok(du.hasClass(el, 'bar'));
    assert.notOk(du.hasClass(el, 'baz'));
    assert.end();

});

test("removeMatchingClasses()", function(assert) {

    var el = document.createElement('div');
    el.className = 'prefix-foo bar zed prefix-bleem baz prefix-zazoo';

    du.removeMatchingClasses(el, /prefix-/);

    assert.equal(el.className, 'bar zed baz');
    assert.end();

});
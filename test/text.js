var du = require('../');
var test = require('tape');

test('getText()', function(assert) {

    var el = document.querySelector('#text_get');

    assert.equal(du.getText(el), "text is cool!");
    assert.end();

});

test('text()', function(assert) {

    var el = document.querySelector('#text_set');

    du.text(el, "wam bam");

    assert.equal(du.getText(el), "wam bam");
    assert.end();

});
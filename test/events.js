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
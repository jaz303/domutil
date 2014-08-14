function v(val) {
    if (typeof val === 'number') {
        return val + 'px';
    } else {
        return val;
    }
}

exports.style = function(el, attribute, value) {
    if (typeof attribute === 'string') {
        el.style[attribute] = v(value);
    } else {
        for (var k in attribute) {
            el.style[k] = v(attribute[k]);
        }
    }
}

exports.removeStyle = function(el, attribute) {
    el.style[attribute] = '';
}
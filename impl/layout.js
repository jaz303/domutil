exports.setRect = function(el, x, y, width, height) {
	el.style.left = x + 'px';
    el.style.top = y + 'px';
    el.style.width = width + 'px';
    el.style.height = height + 'px';
}

exports.setPosition = function(el, x, y) {
    el.style.left = x + 'px';
    el.style.top = y + 'px';
}

exports.setSize = function(el, width, height) {
    el.style.width = width + 'px';
    el.style.height = height + 'px';
}

exports.isHidden = function(el) {
    return el.offsetWidth <= 0 || el.offsetHeight <= 0;
}

exports.isVisible = function(el) {
    return !(el.offsetWidth <= 0 || el.offsetHeight <= 0);
}
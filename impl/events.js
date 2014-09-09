module.exports = exports = require('dom-bind');

exports.stop = stop;
function stop(evt) {
	evt.preventDefault();
	evt.stopPropagation();
}

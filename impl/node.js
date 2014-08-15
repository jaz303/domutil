exports.append = append;
function append(el, content) {
	if (Array.isArray(content)) {
		for (var i = 0, l = content.length; i < l; ++i) {
			append(el, content[i]);
		}
	} else if (typeof content === 'string') {
		if (content.charAt(0) === '<') {
			el.innerHTML += content;
		} else {
			el.appendChild(document.createTextNode(content));
		}
	} else {
		el.appendChild(content);
	}
}

exports.clear = clear;
function clear(el) {
	el.innerHTML = '';
}

exports.isElement = function(el) {
	return el && el.nodeType === 1;
}

exports.replace = function(oldEl, newEl) {
	oldEl.parentNode.replaceChild(newEl, oldEl);
}

exports.content = function(el, content) {
	clear(el);
	append(el, content);
}
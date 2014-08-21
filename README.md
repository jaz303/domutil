# domutil

Simple standalone DOM utility functions, mostly ripped from jQuery.

## Installation

Browserify recommended.

	$ npm install domutil

In the codes:

	var du = require('domutil');

## API

### Classes

#### `du.hasClass(el, className)`

#### `du.addClass(el, className)`

#### `du.removeClass(el, className)`

#### `du.toggleClass(el, className)`

#### `du.removeMatchingClasses(el, regexp)`

Remove all classes on element that match `regexp`.

### Events

#### `du.bind(el, evtType, cb, [useCapture])`

#### `du.bind_c(el, evtType, cb, [useCapture])`

As above, but returns a cancellation function.

#### `du.delegate(el, evtType, selector, cb, [useCapture])`

#### `du.delegate_c(el, evtType, selector, cb, [useCapture])`

As above, but returns a cancellation function.

#### `du.unbind(el, evtType, cb, [useCapture])`

#### `du.stop(evt)`

Shortcut for:

	evt.preventDefault();
	evt.stopPropagation();

### Layout

#### `du.setPosition(el, x, y)`

#### `du.setSize(el, width, height)`

### Matches Selector

#### `du.matchesSelector(selector, el)`

### Node

#### `du.append(el, content)`

Append `content` to `el`. `content` may be a text string, HTML string, DOM node, `DocumentFragment`, or an array of the aforementioned.

#### `du.clear(el)`

Remove all child nodes of `el`.

#### `du.isElement(thing)`

#### `du.replace(oldEl, newEl)`

Replace `oldEl` with `newEl`.

#### `du.content(el, content)`

Set all children of `el`. Equivalent to `du.clear(el); du.append(el, content)`.

### Style

#### `du.style(el, attribute, value)`

Equivalent to `el.style[attribute] = value`. If `value` is a number, `px` will be appended.

#### `du.style(el, attributes)`

Assign all key/value pairs of `attributes` to `el.style`.

#### `du.removeStyle(el, attribute)`

Remove style `attribute` from `el`.

### Text

#### `du.getText(el)`

#### `du.text(el, text)`

### Viewport

#### `du.viewportSize()`
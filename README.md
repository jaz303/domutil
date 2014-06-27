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

#### `du.isElement(thing)`

### Viewport

#### `du.viewportSize()`
# domutil

Simple standalone DOM utility functions, mostly ripped from jQuery.

## Installation

Browserify recommended.

	$ npm install domutil

In the codes:

	var du = require('domutil');

## API

#### `du.data(el, key [, val])`

	// Associate key 'foo' with value 'bar' for element el
	du.data(el, 'foo', 'bar');

	// Read back associated value
	du.data(el, 'foo');

	// Remove mapping
	du.data(el, 'foo', undefined);

	// Remove all mappings for given element
	du.data(el, undefined);

#### `du.hasClass(el, className)`

#### `du.addClass(el, className)`

#### `du.removeClass(el, className)`

#### `du.viewportSize()`

#### `du.stop(evt)`

Shortcut for:

	evt.preventDefault();
	evt.stopPropagation();
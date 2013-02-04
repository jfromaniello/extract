Extract properties from objects and generate a new object.

## Installation

	npm install extract

## Usage

~~~javascript
var extract = require('extract');
var sample = {foo: 123, bar: 'baz'};
var result = extract(sample, ['foo'])

console.log(result);
~~~

Will print ```{foo: 123}```.

## Why?

I use this pattern quite a lot in node.js to deal with things such as [mass-assignment](http://blog.mhartl.com/2008/09/21/mass-assignment-in-rails-applications/).

## License

MIT
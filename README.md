# prefix-stream [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> prefixes a (text) stream with a given string before each chunk, useful, for e.g., when piping text from multiple sources to stdout


## Install

```sh
$ npm install --save prefix-stream
```


## Usage

```js
var PrefixStream = require('prefix-stream');

var source = ... // or anything stream that outputs text

source.pipe(new PrefixStream('my cool prefix: ')).pipe(process.stdout);
```

Alternatively, you can use `new PrefixStream({prefix: 'my cool prefix: '})` if you need to pass other options to the underlying stream implimentation.

## License

MIT © [Nathan Friedly](http://nfriedly.com/)


[npm-image]: https://badge.fury.io/js/prefix-stream.svg
[npm-url]: https://npmjs.org/package/prefix-stream
[travis-image]: https://travis-ci.org/nfriedly/prefix-stream.svg?branch=master
[travis-url]: https://travis-ci.org/nfriedly/prefix-stream
[daviddm-image]: https://david-dm.org/nfriedly/prefix-stream.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/nfriedly/prefix-stream

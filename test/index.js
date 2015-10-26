'use strict';

var assert = require('assert');
var PrefixStream = require('../lib');

describe('prefix-stream', function () {
  it('should prefix all data with the given string', function (done) {
    var instance = new PrefixStream('test: ');
    instance.setEncoding('utf8');

    // setup write()
    var expected = 'test: foo';
    var tested = false;
    instance.on('data', function (actual) {
      assert.equal(actual, expected);
      tested = true;
    });

    // setup end()
    instance.on('end', function () {
      assert(tested, 'data handler ran');
      done();
    });

    // test write()
    instance.write('foo');

    // test end()
    expected = 'test: bar';
    instance.end('bar');
  });
});

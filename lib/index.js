'use strict';


var util = require('util');
var Transform = require('stream').Transform;
util.inherits(PrefixStream, Transform);

function PrefixStream(options) {
  if (!(this instanceof PrefixStream)) {
    return new PrefixStream(options);
  }

  if (typeof options === 'string') {
    options = {prefix: options};
  }

  this.prefix = options.prefix;
  options.decodeStrings = false; // don't turn source data into a buffer unnecessarily

  Transform.call(this, options);
}

PrefixStream.prototype._transform = function (chunk, encoding, done) {
  done(null, this.prefix + (encoding === 'utf8' ? chunk : chunk.toString()));
};

module.exports = PrefixStream;

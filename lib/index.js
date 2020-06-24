'use strict';

var Analytics = require('./dreamdata');

// Create a new `analytics` singleton.
var dreamdata = new Analytics();

// Expose `require`.
dreamdata.require = require;

// Expose package version.
dreamdata.VERSION = require('../package.json').version;

/*
 * Exports.
 */

module.exports = dreamdata;

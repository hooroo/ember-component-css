/* eslint-env node */
'use strict';

var md5 = require('md5');

module.exports = {
  path: function(actualPath) {
    return actualPath.substr(0, actualPath.lastIndexOf("/")).replace('components/', '');
  },
  class: function(modifiedPath) {
    var seperator = '__';
        className = this.path(modifiedPath).replace(/\//g, seperator);
    return className;
  }
};

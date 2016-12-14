/* eslint-env node */
'use strict';

module.exports = {
  path: function(actualPath) {
    return actualPath.substr(0, actualPath.lastIndexOf("/")).replace('components/', '');
  },
  class: function(modifiedPath) {
    var seperator = '-';
    var className = this.path(modifiedPath).replace(/\//g, seperator);
    return className;
  }
};

'use strict';

var path = require('path');

module.exports = {
  name: 'ember-cli-sockethub',

  treeFor: function(name) {
    if (name !== 'vendor') { return; }

    return this._unwatchedTreeGenerator(path.join(__dirname, 'node_modules'));
  },

  included: function(app) {
    this._super.included(app);

    this.app.import( 'vendor/sockethub-client/sockethub-client.js');
  }
};

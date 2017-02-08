import Ember from 'ember';

export default Ember.Route.extend({

  setupController: function(controller, model) {
    this._super(controller, model);
    if (ga) ga('send', 'pageview', '/docs');

    Blockly.fireUiEvent(window, 'resize');
  }
});

import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['vertical-menu-item'],
  mousingOver: false,

  click: function() {
    var clickAction = this.get('clickAction');
    if (clickAction) {
      this.sendAction('clickAction');
    }
  },

  mouseEnter: function() {
    console.log('mousing over');
    this.set('mousingOver', true);
  },

  mouseLeave: function() {
    console.log('mousing out');
    this.set('mousingOver', false);
  }
});

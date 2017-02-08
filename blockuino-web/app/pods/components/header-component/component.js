import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggleHamburger: function() {
      this.toggleProperty('showingHamburger');
    },

    doNews: function() {
      this.set('showingHamburger', false);
      this.sendAction('doNews')
    },

    doDocs: function() {
      this.set('showingHamburger', false);
      this.sendAction('doDocs');
    },

    sendToPi: function() {
      this.sendAction('sendToPi');
    },

    saveProject: function() {
      this.sendAction('saveProject');
    },

    doSavedProjects: function() {
      this.set('showingHamburger', false);
      this.sendAction('doSavedProjects');
    }
  },


  didInsertElement: function () {
    this._super();

    Ember.run.schedule('afterRender', function () {
      Ember.$("#headerHamburger").hide();
    });
  },

  showingHamburgerObserver: function () {
    var showingHamburger = this.get('showingHamburger');
    console.log('showingHamburgerObserver:' + showingHamburger);

    if (showingHamburger === true) {
      Ember.$("#headerHamburger").slideDown('1000');
    } else {
      Ember.$("#headerHamburger").slideUp('1000');
    }
  }.observes('showingHamburger').on('init')
});

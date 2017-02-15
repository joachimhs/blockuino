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
    },

    runHex: function() {
      // The ID of the extension we want to talk to.
      var editorExtensionId = "gfahdikfchnbgbdmkjfecfcpenjmjcll";

      // Make a simple request:
      Ember.$.get( "hexfile", function( data ) {
        console.log('got HEX from Blockuino-pi!');
        console.log(data);

        /*window.postMessage({ type: "FROM_BLOCKUINO", text: "Hello from the webpage!", hex: data }, "*");*/

        chrome.runtime.sendMessage("iobkdcnmnbcjhdnlglhplmjonobkmipo", { hex: data },
          function (response) {
            console.log("RESPONSE: ");
            console.log(response);
          });


        /*chrome.runtime.sendMessage(editorExtensionId, {hex: data}, function(response) {
          console.log('sendMessage');
            if (response.success) {
              console.log("SUCCESS");
            } else {
              console.log("sendMessage FAILED!");
            }
          });*/
      });

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

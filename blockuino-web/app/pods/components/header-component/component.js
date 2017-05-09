import Ember from 'ember';

export default Ember.Component.extend({
  chromeAppInstalled: false,
  lang: 'no',

  actions: {
    toggleHamburger: function() {
      this.toggleProperty('showingHamburger');
    },

    chooseEnglish() {
      var self = this;
      Ember.$.getScript('/arduino_en.js', function() {
        self.set('session.lang', 'en');
      });
    },

    chooseNorwegian() {
      var self = this;
      Ember.$.getScript('/arduino_nb.js', function() {
        self.set('session.lang', 'no');
      });
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

    doLogIn: function() {
      this.set('showingHamburger', false);
      this.sendAction('doLogIn');
    },

    doLogOut: function() {
      this.set('showingHamburger', false);
      this.sendAction('doLogOut');
    },

    runHex: function() {
      // The ID of the extension we want to talk to.
      var editorExtensionId = "Blockly.Msg.ARDUINO_DECLARE_FUNCTION_TOOLTIP";

      // Make a simple request:
      Ember.$.get( "hexfile", function( data ) {
        console.log('got HEX from Blockuino-pi!');
        console.log(data);

        /*window.postMessage({ type: "FROM_BLOCKUINO", text: "Hello from the webpage!", hex: data }, "*");*/

        if (window.chrome) {
          chrome.runtime.sendMessage("ekbpmcpbckbdpbjhdchoniihflnmabie", {hex: data},
            function (response) {
              console.log("RESPONSE: ");
              console.log(response);
            });
        }


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

    var self = this;
    Ember.run.schedule('afterRender', function () {
      Ember.$("#headerHamburger").hide();

      if (window.chrome) {
        chrome.runtime.sendMessage("ekbpmcpbckbdpbjhdchoniihflnmabie", {action: "initialize"},
          function (response) {
            console.log("RESPONSE INIT: ");
            console.log(response);
            if (response === "initialized") {
              self.set('chromeAppInstalled', true);
            }
          });
      }
    });
  },

  projectIsOwn: function() {
    console.log('----<<<>>>------');
    console.log(this.get('project.username'));
    console.log(this.get('session.session.username'));

    var own = this.get('project.username') === undefined || this.get('project.username') === this.get('session.session.username');
    return own;
  }.property('project.username', 'session.session.username'),

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

import config from 'blockuino-web/config/environment';
import Ember from 'ember';

export default Ember.Component.extend({
  chromeAppKey: config.chromeAppKey,
  i18n: Ember.inject.service(),
  lang: 'no',

  actions: {
    toggleHamburger: function() {
      this.toggleProperty('showingHamburger');
    },

    chooseEnglish() {
      var self = this;
      Ember.$.getScript('/arduino_en.js', function() {
        self.set('session.lang', 'en');
        self.set('i18n.locale', 'en');
      });
    },

    chooseNorwegian() {
      var self = this;
      Ember.$.getScript('/arduino_nb.js', function() {
        self.set('session.lang', 'no');
        self.set('i18n.locale', 'no');
      });
    },

    testElectron() {

    },

    doShowDownloadModal: function() {
      this.sendAction('doShowDownloadModal');
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

    serialMonitor: function() {
      this.sendAction('serialMonitor');
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

    newBlockProject: function() {
      this.set('showingHamburger', false);
      this.sendAction('newBlockProject');
    },

    newTextProject: function() {
      this.set('showingHamburger', false);
      this.sendAction('newTextProject');
    },

    selectSketchMode: function() {
      this.sendAction('selectSketchMode');
    },

    selectBlocksMode: function() {
      this.sendAction('selectBlocksMode');
    },


    runHex: function() {
      // The ID of the extension we want to talk to.
      var editorExtensionId = "Blockly.Msg.ARDUINO_DECLARE_FUNCTION_TOOLTIP";
      var self = this;
      // Make a simple request:
      Ember.$.get( "hexfile", function( data ) {
        console.log('got HEX from Blockuino-pi!');
        console.log(data);

        /*window.postMessage({ type: "FROM_BLOCKUINO", text: "Hello from the webpage!", hex: data }, "*");*/

        //dev: iobkdcnmnbcjhdnlglhplmjonobkmipo
        //prod: ekbpmcpbckbdpbjhdchoniihflnmabie
        if (window.chrome) {
          chrome.runtime.sendMessage(self.get('chromeAppKey'), {hex: data},
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

  appInstalled: function() {
    return this.get('chromeAppInstalled') === true || this.get('electronAppInstalled') === true;
  }.property('chromeAppInstalled', 'electronAppInstalled'),

  projectIsOwn: function() {
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

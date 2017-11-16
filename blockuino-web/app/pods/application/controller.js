import config from 'blockuino-web/config/environment';
import Ember from 'ember';

export default Ember.Controller.extend({
  indexController: Ember.inject.controller('index'),
  session: Ember.inject.service('session'),
  chromeAppKey: config.chromeAppKey,
  showUploadToArduinoModal: false,
  uploadStarted: false,
  electronAppInstalled: false,
  chromeAppInstalled: false,
  selectedArduino: 'uno',

  actions: {
    doNews: function() {
      this.transitionToRoute('news');
    },

    doDocs: function() {
      this.transitionToRoute('docs');
    },

    doShowDownloadModal: function() {
      console.log('doShowDownloadModal');
      this.set('showDownloadModal', true);
      Ember.run.later(function() {
        Ember.$("#downloadModal").modal('show');
      });
    },

    hideDownloadModal: function()  {
      Ember.$("#downloadModal").modal('hide');

      var self = this;
      Ember.run.later(function() {
        self.set('showDownloadModal', false);
      }, 500);
    },

    newBlockProject: function() {
      console.log('application.newBlockProject');
      var uuidIsh = this.generateUuidIsh();
      console.log('uuidIsh: ' + uuidIsh);
      this.set('indexController.projectId', uuidIsh);
    },

    selectBlocksMode: function () {
      this.set('indexController.editor', 'blocks');
      Ember.run.later(function() {
        Blockly.fireUiEvent(window, 'resize');
      });
    },

    selectSketchMode: function () {
      this.set('indexController.editor', 'sketch');
      Ember.run.later(function() {
        Blockly.fireUiEvent(window, 'resize');
      });
    },

    sendToPi: function() {
      this.set('showUploadToArduinoModal', true);
      this.set('uploadStarted', false);
      this.set('compileStatus', null);
      this.set('uploadResponseMessage', null);
      this.set('uploadUsbPort', null);
      this.set('uploadError', null);

      Ember.run.later(function() {
        Ember.$("#uploadProjectModal").modal('show');
      });
    },

    serialMonitor: function() {
      this.set('showSerialMonitorModal', true);
      this.set('serialStarted', false);
      this.set('streamSerial', false);
      this.set('serialDataRead', "");
      this.set('selectedSerialPort', null);

      Ember.run.later(function() {
        Ember.$("#serialMonitorModal").modal('show');
      });

      this.set('serialStarted', true);
      var self = this;

      if (self.get('electronAppInstalled')) {
        Ember.$.ajax({
            type: "POST",
            url: "http://localhost:12344",
            dataType: "JSON",
            data: JSON.stringify({action: "serialports_list"}),
            success: function (response) {
              console.log("ELECTRON RESPONSE: ");
              console.log(response);
              self.set('serialPortsAvailable', response);
            }
          });
      } else if (this.get('chromeAppInstalled') && window.chrome) {
        chrome.runtime.sendMessage(this.get('chromeAppKey'), {action: "serialports_list"},
          function (response) {
            console.log("RESPONSE: ");
            console.log(response);
            var responseJson = JSON.parse(response);
            self.set('serialPortsAvailable', responseJson);

          });
      }
    },

    openSerialMonitor: function() {
      console.log('opening Serial Port:');
      console.log(this.get('openSerialMonitor'));
      self = this;

      if (this.get('electronAppInstalled')) {
        Ember.$.ajax({
          type: "POST",
          url: "http://localhost:12344",
          dataType: "JSON",
          data: JSON.stringify({action: "serialports_open", "port": this.get('selectedSerialPort')}),
          success: function (response) {
            console.log("ELECTRON RESPONSE: ");
            console.log(response);

            self.set('streamSerial', true);
          }
        });
      } else if (this.get('chromeAppInstalled') && window.chrome) {
        chrome.runtime.sendMessage(this.get('chromeAppKey'), {action: "serialports_open", "port": this.get('selectedSerialPort')},
          function (response) {
            console.log("RESPONSE: ");
            console.log(response);

            self.set('streamSerial', true);
          });
      }
    },

    hideSerialMonitor: function() {
      Ember.$("#serialMonitorModal").modal('hide');

      if (window.chrome) {
        chrome.runtime.sendMessage(this.get('chromeAppKey'), {action: "serialports_close", "port": this.get('selectedSerialPort')},
          function (response) {
            console.log("RESPONSE: ");
            console.log(response);

            self.set('streamSerial', true);
          });
      }

      var self = this;
      Ember.run.later(function() {
        self.set('showSerialMonitorModal', false);
        self.set('serialStarted', false);
        self.set('streamSerial', false);
        self.set('serialDataRead', "");
        self.set('selectedSerialPort', null);
      }, 500);
    },

    doUploadToArduino() {
      var self = this;
      this.set('uploadStarted', true);
      this.set('compileStatus', null);
      this.set('uploadResponseMessage', null);
      this.set('uploadUsbPort', null);
      this.set('uploadError', null);
      this.set('compileError', null);

      var highligted = this.get('indexController').getGeneratedCode();
      var projectId = this.get('model.project.id');
      var selectedArduino = this.get('selectedArduino');

      Ember.$.post( "/upload/" + projectId + "/arduino/" + selectedArduino, highligted, function( data ) {
        console.log("UPLOAD RESULT:" + data);

        var result = JSON.parse(data);

        if (result.exitStatus !== 0) {
          self.set('compileStatus', 'Kompilering feilet. Sjekk etter feil i koden');
          self.set('compileError', true);
          console.log(result);
          self.set('uploadResponseMessage', result.errorMessage ? result.errorMessage.replace('---', '\n---').replace('===', '\n===').replace('.', '\n.') : "Ingen logg...");
        } else {
          self.set('compileStatus', result.exitStatus !== 0 ? 'Kompilering feilet. Sjekk etter feil i koden' : 'Kompilering OK');
          self.set('compileError', false);
          self.set('uploadResponseMessage', result.returnMessage ? result.returnMessage.replace('---', '\n---').replace('===', '\n===').replace('.', '\n.') : "Ingen logg...");
        }

        if (selectedArduino === 'bbcmicrobit') {
            var filename = 'microbit.hex';

            var blob = new Blob([result.hex], {type: "application/octet-stream"});
            saveAs(blob, filename);
        } else if (self.get('electronAppInstalled')) {
          Ember.$.ajax({
            type: "POST",
            url: "http://localhost:12344",
            dataType: "JSON",
            data: JSON.stringify({hex: result.hex, arduino: selectedArduino}),
            success: function(response) {
              console.log('ELECTRON RESPONSE UPLOAD:');
              console.log(response);


              self.set('uploadUsbPort', response.usbPort ? response.usbPort : 'Fant ingen Arduino!');
              self.set('uploadError', response.error ? response.error : 'OK');
            }
          });
        } else if (result.exitStatus === 0) {
          if (self.get('chromeAppInstalled') && window.chrome) {
            chrome.runtime.sendMessage(self.get('chromeAppKey'), {hex: result.hex, arduino: selectedArduino},
              function (response) {
                console.log("CHROME APP RESPONSE: ");
                console.log(response);
                var responseJson = JSON.parse(response);

                self.set('uploadErrorStatus', responseJson.error);

                self.set('uploadUsbPort', responseJson.usbPort ? responseJson.usbPort : 'Fant ingen Arduino!');
                self.set('uploadError', responseJson.error ? responseJson.error : 'OK');

              });
          }
        }
      });
    },

    closeUploadPanel() {
      Ember.$("#uploadProjectModal").modal('hide');

      var self = this;
      Ember.run.later(function() {
        self.set('showUploadToArduinoModal', false);
        self.set('uploadStarted', false);
      }, 500);
    },

    doLogIn: function() {
      this.transitionToRoute('login');
      Blockly.fireUiEvent(window, 'resize');
    },

    doLogOut: function() {
      this.set('session.session', 'null');
      this.get('session').eraseCookie('uuid');
      Blockly.fireUiEvent(window, 'resize');
    },

    dRemixProject: function() {

    },

    saveProject: function() {
      this.set('showSaveProjectModal', true);
      this.set('projectSaving', false);
      this.set('projectSaveSuccess', false);
      this.set('projectSaveFailed', false);

      var self = this;
      Ember.run.later(function() {
        Ember.$("#saveProjectModal").modal('show');
      });
    },

    hideSaveProject: function() {
      Ember.$("#saveProjectModal").modal('hide');

      var self = this;
      Ember.run.later(function() {
        self.set('showSaveProjectModal', false);
      }, 500);
    },

    doRemixProject: function() {
      this.saveProject(true);
    },

    doSaveProject: function() {
      this.saveProject(false);
    },

    doSavedProjects: function() {
      this.transitionToRoute('saved-projects');
      Blockly.fireUiEvent(window, 'resize');
    }
  },

  serialStreamer: function() {
    console.log('---<<<>>>---');
    console.log('serialStreamer');
    this.doSerialStreamer();
  }.observes('streamSerial').on('init'),

  doSerialStreamer: function() {
    var self = this;
    if (this.get('streamSerial') === true) {

      if (self.get('electronAppInstalled')) {
        Ember.$.ajax({
          type: "POST",
          url: "http://localhost:12344",
          dataType: "JSON",
          data: JSON.stringify({action: "serialports_read_serial"}),
          success: function(response) {
            console.log('ELECTRON RESPONSE SERIAL READ:');
            console.log(response);

            self.set('serialDataRead', self.get('serialDataRead') + response.data);
            var textarea = document.getElementById('serialMonitorOutput');
            if (textarea) {
              textarea.scrollTop = textarea.scrollHeight;
            }
          }
        });
      } else {
        if (window.chrome) {
          chrome.runtime.sendMessage(self.get('chromeAppKey'), {action: 'serialports_read_serial'},
            function (response) {
              console.log("RESPONSE: ");
              console.log(response);
              var responseJson = JSON.parse(response);
              self.set('serialDataRead', self.get('serialDataRead') + responseJson.data);
              var textarea = document.getElementById('serialMonitorOutput');
              if (textarea) {
                textarea.scrollTop = textarea.scrollHeight;
              }
            });
        }
      }
    }

    Ember.run.later(function() {
      self.doSerialStreamer();
    }, 500);
  },

  generateUuidIsh: function(a){
    return a?(0|Math.random()*16).toString(16):(""+1e10).replace(/1|0/g,this.generateUuidIsh)
  },

  saveProject: function(remix) {
    var project = this.get('model.project');
    var xml = this.get('indexController.generatedXML');
    project.set('xml', xml);

    this.set('projectSaving', true);
    this.set('projectSaveSuccess', false);
    this.set('projectSaveFailed', false);

    var self = this;

    if (remix || (project.get('username') && project.get('username') !== this.get('session.session.username'))) {
      var newProject = this.store.createRecord('project',
        {
          id: this.generateUuidIsh(),
          username: this.get('session.session.username'),
          xml: xml,
          name: project.get('name'),
          content: project.get('content'),
          title: project.get('title'),
          remixOf: project.get('id')
        }
      );

      console.log(project);
      project.get('content').rollbackAttributes();

      newProject.save().then(function(data) {
        self.set('projectSaving', false);
        self.set('projectSaveSuccess', true);
        self.set('projectSaveFailed', false);

        console.log('setting projectId: ' + newProject.get('id'));
        alert("Blockuino har laget en remiks av det opprinnelige prosjektet og lagret en kopi på din konto. Det nye prosjektet får prosjekt id " + newProject.get('id') + ".");
        self.set('indexController.projectId', newProject.get('id'));


      });
    } else {
      project.get('content').save().then(function(data) {
        self.set('projectSaving', false);
        self.set('projectSaveSuccess', true);
        self.set('projectSaveFailed', false);
      }, function(data) {
        self.set('projectSaving', false);
        self.set('projectSaveSuccess', false);
        self.set('projectSaveFailed', true);
      });
    }
  }
});

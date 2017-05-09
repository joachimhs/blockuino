import Ember from 'ember';

export default Ember.Controller.extend({
  indexController: Ember.inject.controller('index'),
  session: Ember.inject.service('session'),

  actions: {
    doNews: function() {
      this.transitionToRoute('news');
    },

    doDocs: function() {
      this.transitionToRoute('docs');
    },

    sendToPi: function() {
      var highligted = this.get('indexController').getGeneratedCode();

      var projectId = this.get('model.project.id');

      Ember.$.post( "/upload/" + projectId, highligted, function( data ) {
        console.log("UPLOAD RESULT:" + data);

        if (window.chrome) {
          chrome.runtime.sendMessage("ekbpmcpbckbdpbjhdchoniihflnmabie", {hex: data},
            function (response) {
              console.log("RESPONSE: ");
              console.log(response);
            });
        }
      });
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
      });
    },

    doSaveProject: function() {
      var project = this.get('model.project');
      var xml = this.get('indexController.generatedXML');
      project.set('xml', xml);

      this.set('projectSaving', true);
      this.set('projectSaveSuccess', false);
      this.set('projectSaveFailed', false);

      var self = this;

      if ( project.get('username') && project.get('username') !== this.get('session.session.username')) {
        var newProject = this.store.createRecord('project',
          {
            id: this.generateUuidIsh(),
            username: this.get('session.session.username'),
            xml: xml,
            name: project.get('name'),
            title: project.get('title'),
            remixOf: project.get('id')
          }
        );

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

    },

    doSavedProjects: function() {
      this.transitionToRoute('saved-projects');
      Blockly.fireUiEvent(window, 'resize');
    }
  },

  generateUuidIsh: function(a){
    return a?(0|Math.random()*16).toString(16):(""+1e10).replace(/1|0/g,this.generateUuidIsh)
  }
});

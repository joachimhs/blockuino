import Ember from 'ember';

export default Ember.Controller.extend({
  indexController: Ember.inject.controller('index'),

  actions: {
    doNews: function() {
      this.transitionToRoute('news');
    },

    doDocs: function() {
      this.transitionToRoute('docs');
    },

    sendToPi: function() {
      var highligted = this.get('indexController').getGeneratedCode();

      Ember.$.post( "/upload", highligted, function( data ) {
        console.log("UPLOAD RESULT:" + data);

        chrome.runtime.sendMessage("iobkdcnmnbcjhdnlglhplmjonobkmipo", { hex: data },
          function (response) {
            console.log("RESPONSE: ");
            console.log(response);
          });
      });
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
      project.get('content').save().then(function(data) {
        self.set('projectSaving', false);
        self.set('projectSaveSuccess', true);
        self.set('projectSaveFailed', false);
      }, function() {
        self.set('projectSaving', false);
        self.set('projectSaveSuccess', fasle);
        self.set('projectSaveFailed', true);
      });
    },

    doSavedProjects: function() {
      this.transitionToRoute('saved-projects');
    }
  }
});

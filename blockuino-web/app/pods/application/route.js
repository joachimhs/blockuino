import Ember from 'ember';
import SessionData from '../session/sessionData';

export default Ember.Route.extend({
  session: Ember.inject.service('session'),
  i18n: Ember.inject.service(),

  afterModel: function(user) {
    this.set('i18n.locale', 'no');
  },

  beforeModel(params){
    console.log('APPLICATION ROUTE BEFORE MODEL:');
    console.log(params.queryParams.projectId);
    this.set('projectId', params.queryParams.projectId);
    var self = this;

    Ember.$.get("/currSession").then(function(data) {
      console.log("CURR SESSION;:");
      console.log(data);

      var dataObj = JSON.parse(data);

      console.log('auth:');
      console.log(dataObj.session.authenticated);

      if (dataObj.session.authenticated === true) {
        var sessionData = SessionData.create({
          id: dataObj.session.id,
          username: dataObj.session.username
        });

        self.get('session').set('session', sessionData);
        self.get('session').createCookie('uuid', sessionData.get('id'), 30);
      }
    });
    console.log(this.get('session'));
  },

  model: function() {
    console.log('appRoute model:');
    console.log(this.get('projectId'));
    if (this.get('projectId')) {
      return Ember.RSVP.hash({
        project: this.store.find('project', this.get('projectId')),
        onPi: this.store.find('on-pi', "123")
      });
    } else {
      var uuidIsh = this.generateUuidIsh();
      console.log('uuidIsh: ' + uuidIsh);
      return Ember.RSVP.hash({
        projectId: uuidIsh,
        project: this.store.createRecord('project', { id: uuidIsh}),
        onPi: this.store.find('on-pi', "123")
      });
    }
  },

  generateUuidIsh: function(a){
    return a?(0|Math.random()*16).toString(16):(""+1e10).replace(/1|0/g,this.generateUuidIsh)
  }
});

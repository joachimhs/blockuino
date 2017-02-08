import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel(params){
    console.log('APPLICATION ROUTE BEFORE MODEL:');
    console.log(params.queryParams.projectId);
    this.set('projectId', params.queryParams.projectId);
  },

  model: function() {
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

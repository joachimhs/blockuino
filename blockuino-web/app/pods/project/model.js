import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  xml: DS.attr('string'),
  createdDate: DS.attr('string'),
  content: DS.attr('string'),
  title: DS.attr('string'),
  username: DS.attr('string'),
  remixOf: DS.attr('string'),

  createdDateMs: function() {
    if (this.get('createdDate')) {
      return this.get('createdDate') * 1000;
    }
  }.property('createdDate')
});

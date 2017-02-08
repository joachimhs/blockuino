import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  xml: DS.attr('string'),
  createdDate: DS.attr('date'),
  content: DS.attr('string'),
  title: DS.attr('string'),
  username: DS.attr('string')
});

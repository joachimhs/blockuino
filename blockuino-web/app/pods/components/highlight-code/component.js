import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['source-code'],
  isHighligted: false,

  sourceCodeObserver: function() {
    if (this.get('sourceCode')) {
      var self = this;

      if (this.get('isHighligted') === false) {
        Ember.run.schedule('afterRender', function () {
          Ember.$('pre code').each(function (i, block) {
            var highligted = js_beautify(self.get('sourceCode'));
            highligted = hljs.highlight('javascript', highligted);

            self.set('highligtedSourceCode', new Ember.Handlebars.SafeString(highligted.value));
          });
        });
      }
    }
  }.observes('sourceCode').on('init')
});

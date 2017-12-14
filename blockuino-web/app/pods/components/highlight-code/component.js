import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['source-code'],
  isHighligted: false,

  sourceCodeObserver: function () {
    if (this.get('sourceCode')) {
      var self = this;

      if (this.get('isHighligted') === false && self.get('isCode') === true) {
        Ember.run.schedule('afterRender', function () {
          Ember.$('pre code').each(function (i, block) {
            var highligted = js_beautify(self.get('sourceCode'));
            //highligted = hljs.highlight('javascript', highligted).value;

            console.log(highligted);

            highligted = self.replaceAll(highligted, "#\n  ", "#");
            highligted = self.replaceAll(highligted, "< ", "<");
            highligted = self.replaceAll(highligted, " >", ">");
            highligted = self.replaceAll(highligted, "    #", "#");
            highligted = self.replaceAll(highligted, "  #", "#");
            highligted = self.replaceAll(highligted, "&nbsp;&nbsp;#", "#");
            highligted = self.replaceAll(highligted, "# ", "#");
            highligted = self.replaceAll(highligted, "    #include", "#include");
            highligted = self.replaceAll(highligted, " &gt;", ">");
            highligted = self.replaceAll(highligted, "&lt; ", "<");
            highligted = self.replaceAll(highligted, "&gt;", ">");
            highligted = self.replaceAll(highligted, "&lt;", "<");

            self.set('highligtedSourceCode', highligted);//new Ember.Handlebars.SafeString(highligted));
          });
        });
      } else if (self.get('isXml') === true) {
        //highlighted = hljs.highlight('xml', self.get('sourceCode')).value;
        var oSerializer = new XMLSerializer();
        //var highlighted = oSerializer.serializeToString(self.get('sourceCode'));
        var highlighted = this.get('sourceCode');

        //highlighted = hljs.highlight('xml', highlighted).value;

        self.set('highligtedSourceCode', highlighted);
      }
    }
  }.observes('sourceCode').on('init'),

  escapeRegExp: function (str) {
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
  },

  replaceAll: function (str, find, replace) {
    return str.replace(new RegExp(this.escapeRegExp(find), 'g'), replace);
  },

  escapeHtml: function (unsafe) {
    return unsafe
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
});

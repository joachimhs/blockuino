import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['blockly-setup'],
  generatedCode: null,
  workspace: null,

  actions: {
    generateCode: function() {
        this.updateCode();
    }
  },

  didInsertElement: function() {
    this._super();

    var elementId = this.get('elementId');
    var self = this;

    console.log('didInsertElement');

    Ember.run.schedule('afterRender', function() {
      console.log('afterRender!');

      var workspace = Blockly.inject(elementId,
        {toolbox: document.getElementById('toolboxSetup')});


      console.log('setting workspace: ' + workspace);
      self.set('workspace', workspace);
    });
  },

  workspaceObserver: function() {
    console.log('workspaceObserver:' + this.get('workspace'));
    var workspace = this.get('workspace');

    var self = this;

    if (this.get('workspace')) {
      this.get('workspace').addChangeListener(function(param) {
        console.log(param);
        Ember.run.later(function() {
          self.updateCode();
        })
      });
    }
  }.observes('workspace').on('init'),

  updateCode: function() {
    console.log('updating code!!');
    var workspace = this.get('workspace');

    var code = Blockly.Arduino.workspaceToCode(workspace);
    this.set('generatedCode', code);
  }
});



import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['blockly-setup'],
  generatedCode: null,
  codeVisible: true,

  actions: {
    generateCode: function () {
      this.updateCode();
    },

    toXml: function () {
      this.updateCode();
    }
  },

  didInsertElement: function () {
    this._super();

    var elementId = this.get('elementId');
    var self = this;

    console.log('didInsertElement');

    Ember.run.schedule('afterRender', function () {
      console.log('afterRender!');

        var workspace = Blockly.inject(elementId,
          {toolbox: document.getElementById('toolboxSetup'),
            zoom:
            {controls: false,
              wheel: false,
              startScale: 1.0,
              maxScale: 3,
              minScale: 0.3,
              scaleSpeed: 1.2},
            trashcan: false
          });


        console.log('setting workspace: ' + workspace);
        self.set('workspace', workspace);

      if (self.get('generatedXML') != null) {
        var xml = self.get('generatedXML');
        var dom = Blockly.Xml.textToDom(xml);
        Blockly.Xml.domToWorkspace(self.get('workspace'), dom);
      }
    });
  },

  codeVisibleObserver: function() {
    console.log('codeVisibleObserver');
    if (this.get('codeVisible') === true) {
      Ember.$("#" + this.get('elementId')).addClass('code-visible')
    } else {
      Ember.$("#" + this.get('elementId')).removeClass('code-visible')
    }

  }.observes('codeVisible'),

  workspaceObserver: function () {
    console.log('workspaceObserver:' + this.get('workspace'));
    var workspace = this.get('workspace');

    var self = this;

    if (this.get('workspace')) {
      this.get('workspace').addChangeListener(function (param) {
        console.log(param);
        Ember.run.later(function () {
          self.updateCode();
        })
      });
    }
  }.observes('workspace').on('init'),

  updateCode: function () {
    console.log('updating code!!');
    var workspace = this.get('workspace');

    var code = Blockly.Arduino.workspaceToCode(workspace);
    this.set('generatedCode', code);

    var xml = Blockly.Xml.workspaceToDom(workspace);
    xml = Blockly.Xml.domToPrettyText(xml);

    console.log("XML: ");
    console.log(xml);

    this.set("generatedXML", xml);
  }
});



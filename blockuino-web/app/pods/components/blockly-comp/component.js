import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['blockly-setup'],
  generatedCode: null,
  codeVisible: true,

  compStructure: 'Struktur',
  compSetup: 'Oppsett (Setup)',
  compControl: 'Styring',
  compOperators: 'Operatorer',
  compInputOutput: "Input/Output",
  compSerialCommunication: "Seriell Kommunikasjon",
  compSound: "Lyd",
  compTools: "Hjelpefunksjoner",
  compCustomFunctions: "Egne funksjoner",
  compVariables: "Variabler",
  compConstants: "Konstanter",
  compLedPixels: "LED Pixels",
  compSensors: "Sensorer",
  compTemp: "DHT11 Temp+Fukt",
  compMotors: "Motorer!",
  compServo: "Servo Motorer",
  compDisplay: "Display!",
  compStepper: "Stepper Motors",
  compRF433: "433 MHz Radiomoduler",
  compUltrasonic: "Ultrasonic Sensor",
  compSoftSerialCommunication: "Software Serial",

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
    this.createWorkspace();
    Ember.run.later(function() {
      Blockly.fireUiEvent(window, 'resize');
    }), 500;
  },

  langChange: function () {
    console.log('LANG CHANGE!!!');

    if (this.get('lang')) {
      Blockly.mainWorkspace.dispose();
      this.createWorkspace();
    }

    if (this.get('lang') === 'en') {
      this.set('compStructure', "Structure");
      this.set('compSetup', "Setup");
      this.set('compControl', "Control");
      this.set('compOperators', "Operators");
      this.set('compInputOutput', "Input/Output");
      this.set('compSerialCommunication', "Serial Communication");
      this.set('compSound', "Sound");
      this.set('compTools', "Tools");
      this.set('compCustomFunctions', "Custom Functions");
      this.set('compVariables', "Variables");
      this.set('compConstants', "Constants");
      this.set('compLedPixels', "LED Pixels");
      this.set('compSensors', "Sensors");
      this.set('compTemp', "DHT11 Temp+moisture");
      this.set('compMotors', "Motors");
      this.set('compServo', "Servo Motors");
      this.set('compDisplay', "Display");
      this.set('compStepper', "Stepper Motors");
      this.set('compRF433','433 MHz Radio modules');
      this.set('compUltrasonic','Ultrasonic Sensor');
      this.set('compSoftSerialCommunication','compSoftSerialCommunication');
    } else if (this.get('lang') === 'no') {
      this.set('compStructure', "Struktur");
      this.set('compSetup', "Oppsett (Setup");
      this.set('compControl', "Styring");
      this.set('compOperators', "Operatorer");
      this.set('compInputOutput', "Input/Output");
      this.set('compSerialCommunication', "Seriell Kommunikasjon");
      this.set('compSound', "Lyd");
      this.set('compTools', "Hjelpefunksjoner");
      this.set('compCustomFunctions', "Egne funksjoner");
      this.set('compVariables', "Variabler");
      this.set('compConstants', "Konstanter");
      this.set('compLedPixels', "LED Pixels");
      this.set('compSensors', "Sensorer");
      this.set('compTemp', "DHT11 Temp+Fukt");
      this.set('compMotors', "Motorer");
      this.set('compServo', "Servo Motorer");
      this.set('compDisplay', "Display");
      this.set('compStepper', "Stepper Motors");
      this.set('compRF433','433 MHz Radiomoduler');
      this.set('compUltrasonic','Ultralydsensor');
      this.set('compSoftSerialCommunication','compSoftSerialCommunication');
    }
  }.observes('lang'),

  createWorkspace: function () {
    var elementId = this.get('elementId');
    var self = this;

    console.log('didInsertElement');

    Ember.run.schedule('afterRender', function () {
      console.log('afterRender!');

      var workspace = Blockly.inject(elementId,
        {
          toolbox: document.getElementById('toolboxSetup'),
          zoom: {
            controls: false,
            wheel: false,
            startScale: 1.0,
            maxScale: 3,
            minScale: 0.3,
            scaleSpeed: 1.2
          },
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

  codeVisibleObserver: function () {
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



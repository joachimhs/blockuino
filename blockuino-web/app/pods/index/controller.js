import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  applicationController: Ember.inject.controller('application'),

  showCode: true,
  showXml: false,
  workspace: null,
  xml: "",
  queryParams: ['projectId', 'editor'],
  //queryParams: 'xml',
  codeVisible: true,

  init: function () {
    this._super();
    var self = this;
    Ember.run.later(function () {
      console.log('--------_> Editor: ' + self.get('editor'));
      if (self.get('editor') === undefined || !self.get('editor') === 'sketch') {
        self.set('editor', 'blocks');
      }

      if(self.get('projectId') === undefined) {
        self.set('projectId', self.get('session').generateUuidIsh());
      }
    }, 1000);

    CodeMirror.addMINEkeyword = function (mime, data) {
      CodeMirror.mimeModes[mime].keywords = data;
    };

    var obj = {}, words = "pinMode digitalWrite delay analogWrite HIGH LOW OUTPUT INPUT INPUT_PULLUP".split(" ");
    for (var i = 0; i < words.length; ++i) obj[words[i]] = true;

    CodeMirror.addMINEkeyword("text/x-csrc", obj);
  },

  actions: {
    showCode: function () {
      this.set('showCode', true);
      this.set('showXml', false);
    },

    hideCodeArea: function () {
      this.set('codeVisible', false);
      Blockly.fireUiEvent(window, 'resize');
    },

    showCodeArea: function () {
      this.set('codeVisible', true);
      Blockly.fireUiEvent(window, 'resize');
    },

    showDownloadXmlModal: function () {
      this.set('showDownloadModal', true);
      var self = this;
      Ember.run.later(function () {
        Ember.$("#downloadXmlModal").modal('show');
      });
    },

    hideDownloadXmlModal: function () {
      Ember.$("#downloadXmlModal").modal('hide');

      var self = this;
      Ember.run.later(function () {
        self.set('showDownloadModal', false);
      });
    },

    showUploadXmlModal: function () {
      this.set('showUploadModal', true);
      var self = this;
      Ember.run.later(function () {
        Ember.$("#uploadXmlModal").modal('show');

        Ember.run.later(function () {
          self.uploadXmlListener();
        });
      });
    },

    showClipboardModal: function () {
      this.set('showClipboardModal', true);

      var self = this;
      Ember.run.later(function () {
        Ember.$("#clipboardModal").modal('show');
      });
    },

    hideClipboardModal: function () {
      Ember.$("#clipboardModal").modal('hide');

      var self = this;
      Ember.run.later(function () {
        self.set('showClipboardModal', false);
      });
    },

    copyArduino: function () {
      var highligted = this.getGeneratedCode();

      var $temp = $("<textarea>");
      $("body").append($temp);
      $temp.val(highligted).select();
      document.execCommand("copy");
      $temp.remove();

      Ember.$("#clipboardModal").modal('hide');
    },

    copyXml: function () {
      var sourceCode = this.get('generatedXML');

      var $temp = $("<textarea>");
      $("body").append($temp);
      $temp.val(sourceCode).select();
      document.execCommand("copy");
      $temp.remove();

      alert('XML koden er kopiert til utklippstavlen');
    },

    hideUploadXmlModal: function () {
      Ember.$("#uploadXmlModal").modal('hide');

      var self = this;
      Ember.run.later(function () {
        self.set('showUploadModal', false);
      });
    },

    showXml: function () {
      this.set('showCode', false);
      this.set('showXml', true);
    },

    fromXml: function () {
      this.convertFromXml();
    },

    downloadXml: function () {
      var filename = this.get('blockuinoFilename');

      if (!filename) {
        filename = "blockuino.xml"
      } else if (filename.indexOf('.xml') == -1) {
        filename += ".xml";
      }

      var blob = new Blob([this.get('generatedXML')], {type: "text/xml;charset=utf-8"});
      saveAs(blob, filename);
    }
  },

  getGeneratedCode: function () {
    if (this.get('editor') === 'blocks') {
      var highligted = js_beautify(this.get('blocklyCode'));
      //highligted = hljs.highlight('javascript', highligted).value;

      highligted = this.replaceAll(highligted, "#\n  ", "#");
      highligted = this.replaceAll(highligted, "< ", "<");
      highligted = this.replaceAll(highligted, " >", ">");
      highligted = this.replaceAll(highligted, "    #", "#");
      highligted = this.replaceAll(highligted, "  #", "#");
      highligted = this.replaceAll(highligted, "&nbsp;&nbsp;#", "#");
      highligted = this.replaceAll(highligted, "# ", "#");
      highligted = this.replaceAll(highligted, "    #include", "#include");
      highligted = this.replaceAll(highligted, " &gt;", ">");
      highligted = this.replaceAll(highligted, "&lt; ", "<");
      highligted = this.replaceAll(highligted, "&gt;", ">");
      highligted = this.replaceAll(highligted, "&lt;", "<");

      return highligted;
    } else if (this.get('editor') === 'sketch') {
      return this.get('model.project.content.content');
    }
  },

  blocklyCol: function () {
    if (this.get('codeVisible') === true) {
      return "col-md-6";
    } else {
      return "col-md-11";
    }
  }.property('codeVisible'),

  codeCol: function () {
    if (this.get('codeVisible') === true) {
      return "col-md-5";
    } else {
      return "col-md-1";
    }
  }.property('codeVisible'),

  projectIdObserver: function () {
    var self = this;

    var projectId = this.get('projectId');
    var project = this.get('model.project');
    var model = this.get('model');

    if (!model || (model && projectId !== project.get('id'))) {
      Ember.run.later(function() {
        self.set('model.project', self.store.find('project', projectId));
      }, 500);
    }
  }.observes('projectId'),

  modelProjectIdObserver: function () {
    var self = this;
    var project = this.get('model.project');

    if (project && project.get('xml')) {
      console.log('setting generatedXML to projectXML: ');
      console.log(project.get('xml'));
      self.set('generatedXML', project.get('xml'));
      self.convertFromXml();
    } else {
      self.set('generatedXML', '');
      self.convertFromXml();
    }
  }.observes('model.project.xml').on('init'),

  uploadXmlListener: function () {
    var self = this;

    var fileChooser = document.getElementById('xmlFileChooser');
    fileChooser.addEventListener('change', function (event) {
      var f = event.target.files[0];

      if (f) {
        var r = new FileReader();
        r.onload = function (e) {
          var contents = e.target.result;
          self.set('generatedXML', contents);
          self.convertFromXml();
        };

        r.readAsText(f);
      } else {
        alert("Failed to load file");
      }
    });
  },

  /*xmlObserver: function () {
   var compressed = this.get('xml');
   var generatedXml = this.get('generatedXML');

   if (compressed && !generatedXml) {
   var xml = LZString.decompressFromBase64(compressed);

   if (xml) {
   this.set('generatedXML', xml);
   }
   }

   }.observes('xml', 'generatedXML').on('init'),*/

  verifyBlocks: function(xml) {
    var errors = Ember.A();

    //Used for context help
    this.set('session.hasSetup', xml && xml.indexOf('arduino_setup') !== -1);
    this.set('session.hasLoop', xml && xml.indexOf('arduino_loop') !== -1);
    this.set('session.hasNeopixel', xml && xml.indexOf('arduino_pixel') !== -1);
    this.set('session.hasArduinoCar', xml && xml.indexOf('arduino_car') !== -1);

    if (!this.get('session.hasSetup') || !this.get('session.hasLoop')) {
      errors.pushObject({ "id": 1, "messageTranslationKey": "common.errors.structureMissing"});
    }

    //generate error messages
    if (xml) {
      if ((xml.match(/arduino_setup/g) || []).length > 1) {
        errors.pushObject({ "id": 2, "messageTranslationKey": "common.errors.tooManySetup"});
      }
      if ((xml.match(/arduino_loop/g) || []).length > 1) {
        errors.pushObject({ "id": 3, "messageTranslationKey": "common.errors.tooManyLoop"});
      }
      if ((xml.match(/x="/g) || []).length > 1) {
        errors.pushObject({ "id": 4, "messageTranslationKey": "common.errors.codeDisconnected"});
      }

      if (xml.indexOf('arduino_serial') !== -1 && xml.indexOf('arduino_serial_begin') === -1) {
        errors.pushObject({ "id": 5, "messageTranslationKey": "common.errors.missingSerialBegin"});
      }

      if (xml.indexOf('arduino_software_serial') !== -1 && xml.indexOf('arduino_software_serial_begin') === -1) {
        errors.pushObject({ "id": 6, "messageTranslationKey": "common.errors.missingSoftwareSerialBegin"});
      }

      if (xml.indexOf('arduino_software_serial') !== -1 && xml.indexOf('arduino_software_serial_include') === -1) {
        errors.pushObject({ "id": 7, "messageTranslationKey": "common.errors.missingSoftwareSerialInclude"});
      }

      if (xml.indexOf('<field name="VAR">element</field>') !== -1) {
        errors.pushObject({ "id": 8, "messageTranslationKey": "common.errors.variableNamedElement"});
      }

      if (xml.indexOf('<field name="type">Servo</field>') !== -1 && xml.indexOf('servo_include') === -1) {
        errors.pushObject({ "id": 9, "messageTranslationKey": "common.errors.servoIncludeMissing"});
      }

      if (xml.indexOf('<field name="type">Servo</field>') !== -1 && xml.indexOf('servo_attach') === -1) {
        errors.pushObject({ "id": 10, "messageTranslationKey": "common.errors.servoAttachMissing"});
      }
    }

    this.set('session.errors', errors);
  },

  generatedXmlObserver: function () {
    var xml = this.get('generatedXML');
    if (xml) {
      var encodedData = LZString.compressToBase64(xml);
      this.set('xml', encodedData);
      this.verifyBlocks(xml);
    }
    //var decodedData = window.atob(encodedData); // decode the string
    //The following used for context-help
  }.observes('generatedXML').on('init'),

  convertFromXml: function () {
    var self = this;
    //if (!Blockly.mainWorkspace) {
    Ember.run.later(function () {
      if (self.get('editor') === 'blocks' && self.get('generatedXML')) {
        Blockly.mainWorkspace.clear();
        var workspace = self.get('workspace');

        var xml = self.get('generatedXML');
        var dom = Blockly.Xml.textToDom(xml);
        Blockly.Xml.domToWorkspace(workspace, dom);
      }
    }, 500);
    //}
  },

  escapeRegExp: function (str) {
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
  },

  replaceAll: function (str, find, replace) {
    return str.replace(new RegExp(this.escapeRegExp(find), 'g'), replace);
  }
});

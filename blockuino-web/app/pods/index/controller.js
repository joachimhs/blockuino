import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  showCode: true,
  showXml: false,
  workspace: null,
  xml: "",
  queryParams: ['projectId', 'editor'],
  //queryParams: 'xml',
  codeVisible: true,

  init: function() {
    this._super();
    var self = this;
    Ember.run.later(function() {
      if (!self.get('editor')) {
        self.set('editor', 'blocks');
      }
    });

    CodeMirror.addMINEkeyword = function(mime, data) {
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

    hideCodeArea: function() {
      this.set('codeVisible', false);
      Blockly.fireUiEvent(window, 'resize');
    },

    showCodeArea: function() {
      this.set('codeVisible', true);
      Blockly.fireUiEvent(window, 'resize');
    },

    showDownloadXmlModal: function() {
      this.set('showDownloadModal', true);
      var self = this;
      Ember.run.later(function() {
        Ember.$("#downloadXmlModal").modal('show');
      });
    },

    hideDownloadXmlModal: function() {
      Ember.$("#downloadXmlModal").modal('hide');

      var self = this;
      Ember.run.later(function() {
        self.set('showDownloadModal', false);
      });
    },

    showUploadXmlModal: function() {
      this.set('showUploadModal', true);
      var self = this;
      Ember.run.later(function() {
        Ember.$("#uploadXmlModal").modal('show');

        Ember.run.later(function() {
            self.uploadXmlListener();
        });
      });
    },

    showClipboardModal: function() {
      this.set('showClipboardModal', true);

      var self = this;
      Ember.run.later(function() {
        Ember.$("#clipboardModal").modal('show');
      });
    },

    hideClipboardModal: function() {
      Ember.$("#clipboardModal").modal('hide');

      var self = this;
      Ember.run.later(function() {
        self.set('showClipboardModal', false);
      });
    },

    copyArduino: function() {
      var highligted = this.getGeneratedCode();

      var $temp = $("<textarea>");
        $("body").append($temp);
        $temp.val(highligted).select();
        document.execCommand("copy");
        $temp.remove();

      alert('Arduinokoden er kopiert til utklippstavlen');
    },

    copyXml: function() {
      var sourceCode = this.get('generatedXML');

        var $temp = $("<textarea>")
        $("body").append($temp);
        $temp.val(sourceCode).select();
        document.execCommand("copy");
        $temp.remove();

      alert('XML koden er kopiert til utklippstavlen');
    },

    hideUploadXmlModal: function() {
      Ember.$("#uploadXmlModal").modal('hide');

      var self = this;
      Ember.run.later(function() {
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

  getGeneratedCode: function() {
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

  blocklyCol: function() {
    if (this.get('codeVisible') === true) {
      return "col-md-6";
    } else {
      return "col-md-11";
    }
  }.property('codeVisible'),

  codeCol: function() {
    if (this.get('codeVisible') === true) {
      return "col-md-5";
    } else {
      return "col-md-1";
    }
  }.property('codeVisible'),

  projectObserver: function() {
    var self = this;

    console.log('projectObserver!');

    var projectId = this.get('projectId');
    var modelProjectId = this.get('model.projectId');
    var project = this.get('model.project');

    console.log(projectId);
    console.log(project);

    if (project != null && project.get('id') != null) {
      if (projectId == null || projectId !== project.get('id')) {
        Ember.run.later(function() {
          self.set('projectId', project.get('id'));
        }, 1000);

      }
    }

  }.observes('model.project', 'model.projectId'),

  uploadXmlListener: function() {
    var self = this;

      var fileChooser = document.getElementById('xmlFileChooser');
      fileChooser.addEventListener('change', function (event) {
        var f = event.target.files[0];

        if (f) {
          var r = new FileReader();
          r.onload = function(e) {
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

  convertFromXml: function() {
    var self = this;
    //if (!Blockly.mainWorkspace) {
      Ember.run.later(function() {
        if (self.get('editor') === 'blocks') {
          Blockly.mainWorkspace.clear();
          var workspace = self.get('workspace');

          var xml = self.get('generatedXML');
          var dom = Blockly.Xml.textToDom(xml);
          Blockly.Xml.domToWorkspace(workspace, dom);
        }
      }, 500);
    //}
  },

  generatedXmlObserver: function () {
    var xml = this.get('generatedXML');
    if (xml) {
      var encodedData = LZString.compressToBase64(xml);
      this.set('xml', encodedData);
    }

    //var decodedData = window.atob(encodedData); // decode the string
  }.observes('generatedXML').on('init'),

  escapeRegExp: function (str) {
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
  },

  replaceAll: function (str, find, replace) {
    return str.replace(new RegExp(this.escapeRegExp(find), 'g'), replace);
  },

  modelProjectIdObserver: function() {
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
  }.observes('model.project.id').on('init'),

  projectIdObserver: function() {
    console.log('projectIdObserver... ');
    var projectId = this.get('projectId');
    var model = this.get('model');

    if (projectId && model) {
      this.set('model.project', this.store.find('project', this.get('projectId')));
    }

  }.observes('projectId', 'model')
});

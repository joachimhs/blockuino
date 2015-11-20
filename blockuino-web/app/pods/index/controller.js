import Ember from 'ember';

export default Ember.Controller.extend({
  showCode: true,
  showXml: false,
  workspace: null,
  queryParams: 'xml',

  init: function() {
    this._super();
    var self = this;
  },

  actions: {
    showCode: function () {
      this.set('showCode', true);
      this.set('showXml', false);
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
      var sourceCode = js_beautify(this.get('blocklyCode'));

        var $temp = $("<textarea>")
        $("body").append($temp);
        $temp.val(sourceCode).select();
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

  xmlObserver: function () {
    var compressed = this.get('xml');
    var generatedXml = this.get('generatedXML');

    if (compressed && !generatedXml) {
      this.set('generatedXML', LZString.decompressFromBase64(compressed));
    }

  }.observes('xml', 'generatedXML').on('init'),

  convertFromXml: function() {
    Blockly.mainWorkspace.clear();
    var workspace = this.get('workspace');

    var xml = this.get('generatedXML');
    var dom = Blockly.Xml.textToDom(xml);
    Blockly.Xml.domToWorkspace(this.get('workspace'), dom);
  },

  generatedXmlObserver: function () {
    var xml = this.get('generatedXML');
    if (xml) {
      var encodedData = LZString.compressToBase64(xml);
      this.set('xml', encodedData);
    }

    //var decodedData = window.atob(encodedData); // decode the string
  }.observes('generatedXML').on('init')
});

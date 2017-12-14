/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {

    emberCliFontAwesome: {
      useScss: true
    },

    codemirror: {
      modes: ['clike'],
      themes: ['solarized', 'twilight']
    },

    fingerprint: {
      exclude: ['errors']
    }


    // Add options here
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  app.import('vendor/blockly/blockly_compressed.js');
  app.import('vendor/blockly/blocks_compressed.js');
  app.import('vendor/blockly/en.js');
  app.import('vendor/blockly/nb.js');
  app.import('vendor/blockly/arduino.js');
  app.import('vendor/blockly/custom_blocks.js');

  app.import('vendor/highlight/highlight.pack.js');
  app.import('vendor/highlight/solarized_light.css');

  app.import('bower_components/js-beautify/js/lib/beautify.js');

  app.import('vendor/lz-string/lz-string.js');
  app.import('vendor/filesaver/filesaver.js');

  app.import('bower_components/bootstrap/dist/js/bootstrap.min.js');
  app.import('bower_components/bootstrap/dist/css/bootstrap.css');


  app.import('bower_components/font-awesome/css/font-awesome.css');
  app.import('bower_components/font-awesome/fonts/fontAwesome.otf');
  app.import('bower_components/font-awesome/fonts/fontawesome-webfont.eot');
  app.import('bower_components/font-awesome/fonts/fontawesome-webfont.svg');
  app.import('bower_components/font-awesome/fonts/fontawesome-webfont.ttf');
  app.import('bower_components/font-awesome/fonts/fontawesome-webfont.woff');
  app.import('bower_components/font-awesome/fonts/fontawesome-webfont.woff2');


  return app.toTree();
};

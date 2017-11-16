/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'blockuino-web',
    podModulePrefix: 'blockuino-web/pods',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',

    i18n: {
      defaultLocale: 'zh'
    },

    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.chromeAppKey = 'iobkdcnmnbcjhdnlglhplmjonobkmipo';
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.googleAnalytics = {
      webPropertyId: 'UA-47245350-4'
    };

    ENV.chromeAppKey = 'ekbpmcpbckbdpbjhdchoniihflnmabie';
  }

  ENV.contentSecurityPolicy = {
    'default-src': "'none'",
      'script-src': "'self' https://www.google-analytics.com/analytics.js http://www.google-analytics.com/analytics.js",
      'font-src': "'self'",
      'connect-src': "'self' https://www.google-analytics.com http://www.google-analytics.com",
      'img-src': "'self' https://www.google-analytics.com http://www.google-analytics.com https://blockly-demo.appspot.com",
      'style-src': "'self'",
      'media-src': "'self' https://blockly-demo.appspot.com"
  };

  return ENV;
};

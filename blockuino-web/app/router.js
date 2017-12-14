import Ember from 'ember';
import config from './config/environment';
import googlePageview from './mixins/google-pageview';


var Router = Ember.Router.extend(googlePageview, {
  location: config.locationType
});

Router.map(function() {
  this.route('news');
  this.route('docs');
});

export default Router;

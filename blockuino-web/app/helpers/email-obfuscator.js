import Ember from 'ember';

export function emailObfuscator(params/*, hash*/) {
  console.log('<<>>');
  console.log(params);

  if (params[0]) {
    console.log('<<>>000<<>>')
    console.log(params[0]);
    var email_regex = /(..)([a-zA-Z0-9._-]+)(..)@([a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi;
    var result = params[0].replace(email_regex, '$1***$3@$4');
    return result;
  } else {

    return params;
  }

}

export default Ember.Helper.helper(emailObfuscator);

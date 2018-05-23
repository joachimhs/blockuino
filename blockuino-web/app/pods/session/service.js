import Ember from 'ember';

export default Ember.Service.extend({
  id: "",
  username: "",
  lang: "no",

  createCookie: function(name, value, days) {
    var expires = null;

    if (days) {
      var date = new Date();
      date.setTime(date.getTime()+(days*24*60*60*1000));
      expires = "; expires="+date.toGMTString();
    }
    else {
      expires = "";
    }
    document.cookie = name+"="+value+expires+"; path=/";
  },

  readCookie:function (name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  },

  eraseCookie:function (name) {
    this.createCookie(name, "", -1);
  },

  generateUuidIsh: function (a) {
    return a ? (0 | Math.random() * 16).toString(16) : ("" + 1e10).replace(/1|0/g, this.generateUuidIsh)
  },
});

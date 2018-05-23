import Ember from 'ember';
import SessionData from '../session/sessionData';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  readyForTokenInput: false,

  actions: {
    doGetToken: function() {
      this.set('errorMessage', null);

      var self = this;
      var payload = {
        username: this.get('model.email')
      };

      Ember.$.ajax({
        method: "post",
        url: "/generateToken",
        contentType: 'application/json',
        data: JSON.stringify(payload),
      }).then(function(responsePayload) {
        var dataObj = JSON.parse(responsePayload);

        console.log(dataObj.tokenGenerated);
        console.log(dataObj);
        if (dataObj.tokenGenerated === true) {
          self.set('readyForTokenInput', true);
        } else {
          self.set('readyForTokenInput', false);
        }
      });
    },

    doLogIn: function () {
      this.set('errorMessage', null);

      var self = this;

      var loginData = {
        username: this.get('model.email'),
        password: this.get('token')
      };

      $.ajax({
        type: 'POST',
        url: '/login',
        data: JSON.stringify(loginData),

        success: function(res, status, xhr) {
          var dataObj = JSON.parse(res);
          if (dataObj.session.authenticated === true) {
            console.log('SUCCESSFUL LOGIN');
            console.log(dataObj);

              var sessionData = SessionData.create({
                id: dataObj.session.id,
                username: dataObj.session.username
              });

              self.get('session').set('session', sessionData);
              self.get('session').createCookie('uuid', sessionData.get('id'), 30);

            self.set('stormpathLoginError', false);
          } else {
            self.set('session.session', null);
            self.set('stormpathLoginError', true);
            self.set('errorMessage', 'Klarte ikke logge inn. Vennligst forsøk igjen.');
          }
        },
        error: function(xhr, status, err) {
          console.log("-------------\nerror: " + status + " error: " + err);
          self.set('stormpathLoginError', true);
        }
      });
    },

    doLogOut() {
      this.set('session.session', 'null');
      this.get('session').eraseCookie('uuid');
    }
  }
});

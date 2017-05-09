import Ember from 'ember';
import SessionData from '../session/sessionData';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  actions: {
    doLogIn: function () {
      this.set('errorMessage', null);

      var self = this;
      var payload = {
        username: this.get('model.email'),
        password: this.get('model.password')
      };

      Ember.$.ajax({
        method: "post",
        url: "/login",
        contentType: 'application/json',
        data: JSON.stringify(payload),
      }).then(function(data) {
        console.log('LOGIN RESULT: ' + data);

        if (data === "ERROR") {
          self.set('errorMessage', 'Klarte ikke logge inn. Vennligst forsøk igjen.');
        } else {
          var dataObj = JSON.parse(data);

          console.log('auth:');
          console.log(dataObj.session.authenticated);

          if (dataObj.session.authenticated === true) {
            var sessionData = SessionData.create({
              id: dataObj.session.id,
              username: dataObj.session.username
            });

            self.get('session').set('session', sessionData);
            self.get('session').createCookie('uuid', sessionData.get('id'), 30);
          }
        }
      });
    },

    doLogOut() {
      this.set('session.session', 'null');
      this.get('session').eraseCookie('uuid');
    }
  }
});

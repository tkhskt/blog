const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

const mail = "luckymortality@gmail.com";

exports.create = functions.auth.user().onCreate((user) => {
  if (user.email == mail) {
    return admin.auth().setCustomUserClaims(user.uid, { admin: true }).then();
  }
});


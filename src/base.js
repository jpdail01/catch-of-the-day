import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyADLXEoGmAAnhpHXs4fflkoEjvTqX3gpmE",
  authDomain: "catch-of-the-day-f7508.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-f7508.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
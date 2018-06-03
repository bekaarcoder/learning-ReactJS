import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDnAY8GxE5lfksNBXTJjcZHxtxXddR3wXQ",
  authDomain: "expensify-80eb7.firebaseapp.com",
  databaseURL: "https://expensify-80eb7.firebaseio.com",
  projectId: "expensify-80eb7",
  storageBucket: "expensify-80eb7.appspot.com",
  messagingSenderId: "279094436178"
};

firebase.initializeApp(config);

firebase.database().ref('users').set({
	username: 'shashank'
});
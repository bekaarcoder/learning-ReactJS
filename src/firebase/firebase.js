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

const database = firebase.database();

export { firebase, database as default };

/*database.ref('users').set({
	username: 'shashank',
	age: 24,
	city: 'New Delhi'
});*/


// database.ref('users').set(user);

/*database.ref('users/city').remove()
	.then(() => {
		console.log("Removed Data!");
	}).catch((e) => {
		console.log("Failed: ", e.message);
	});*/

/*database.ref('expenses').push({
	description: 'Gas Bill',
	note: '',
	amount: 1000,
	createdAt: 123432123
});*/

/*database.ref('expenses').once('value')
	.then((dataSnapshot) => {
		const expenses = [];
		dataSnapshot.forEach((childSnapshot) => {
			expenses.push({
				id: childSnapshot.key,
				...childSnapshot.val()
			});
		});
		console.log(expenses);
	}).catch((e) => {
		console.log(e);
	});

database.ref('expenses').on('value', (dataSnapshot) => {
	const expenses = [];
		dataSnapshot.forEach((childSnapshot) => {
			expenses.push({
				id: childSnapshot.key,
				...childSnapshot.val()
			});
		});
		console.log(expenses);
	});*/
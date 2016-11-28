// import and configure firebase
import * as firebase from 'firebase';

const firebaseConfig = {
	apiKey: "AIzaSyAJO4FTAqReHONa3n4FvNo9R9u8RghAZJc",
	authDomain: "museumlisting.firebaseapp.com",
	databaseURL: "https://museumlisting.firebaseio.com",
	storageBucket: "museumlisting.appspot.com",
	messagingSenderId: "968555127105"
}
export const firebaseApp = firebase.initializeApp(firebaseConfig)

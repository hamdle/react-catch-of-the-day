import Rebase from 're-base'; // React & Firebase specific package
import firebase from 'firebase';

// Create firebase app
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCHbj50NW1XS3Ht2GdcQUsKb-JpNht5pXE",
    authDomain: "catch-of-the-day-eric-marty.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-eric-marty.firebaseio.com",
});

// Create our rebase bindings
const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;
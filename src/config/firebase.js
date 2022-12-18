import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'


var firebaseConfig = {
  apiKey: "AIzaSyCrEKa4eY8LN6AJwCEGxzmRjHkHsEFbctc",
  authDomain: "fir-database-6f7fc.firebaseapp.com",
  databaseURL: "https://fir-database-6f7fc.firebaseio.com",
  projectId: "fir-database-6f7fc",
  storageBucket: "fir-database-6f7fc.appspot.com",
  messagingSenderId: "489357761157",
  appId: "1:489357761157:web:7795621ce96bfd0d5d27ec",
  measurementId: "G-N5D93XB7LJ"
};

  firebase.initializeApp(firebaseConfig)

  export default  firebase;

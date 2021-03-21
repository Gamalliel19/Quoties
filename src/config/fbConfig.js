import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBZ-PlOK8-vBFLk4tiHmRQ5EyNDG3GVeac",
    authDomain: "plantask-615f8.firebaseapp.com",
    databaseURL: "https://plantask-615f8.firebaseio.com",
    projectId: "plantask-615f8",
    storageBucket: "plantask-615f8.appspot.com",
    messagingSenderId: "756281609903",
    appId: "1:756281609903:web:7dfec042a6116672518e5a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true });


  export default firebase;
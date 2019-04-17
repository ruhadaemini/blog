import firebase from 'firebase/app';
import 'firebase/firestore'; //this is database
import 'firebase/auth';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBCwBDOkEfUdqvWgmzvnysMuYWbDbozZIg",
    authDomain: "blog-fa782.firebaseapp.com",
    databaseURL: "https://blog-fa782.firebaseio.com",
    projectId: "blog-fa782",
    storageBucket: "blog-fa782.appspot.com",
    messagingSenderId: "28811656351"
};

firebase.initializeApp(config);
//setting and object which sets how firebase works on timestamps
firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase;
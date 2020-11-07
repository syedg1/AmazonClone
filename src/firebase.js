import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDbu1xyvJiOFkreuTNEMY82OWhJLNuhs_A",
    authDomain: "clone-75c6d.firebaseapp.com",
    databaseURL: "https://clone-75c6d.firebaseio.com",
    projectId: "clone-75c6d",
    storageBucket: "clone-75c6d.appspot.com",
    messagingSenderId: "956897118454",
    appId: "1:956897118454:web:145c402ab6277bcafc84d7",
    measurementId: "G-G4JFTVH2KB"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

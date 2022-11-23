import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyApMZcY84n20HfF6lzKnD_Z3tYiAVY46MM",
    authDomain: "crwn-db-5d7da.firebaseapp.com",
    projectId: "crwn-db-5d7da",
    storageBucket: "crwn-db-5d7da.appspot.com",
    messagingSenderId: "848906965746",
    appId: "1:848906965746:web:c2b31d5415abd76dc3f66b",
    measurementId: "G-S6E9376KK8"
  }
  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore =firebase.firestore();


  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({prompt:'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
  

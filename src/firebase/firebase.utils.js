import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBfHfVkjg8Z9RZfy_CJ-FQ9ugjQg_vxF6U",
    authDomain: "ecommerce-project-db-df8de.firebaseapp.com",
    projectId: "ecommerce-project-db-df8de",
    storageBucket: "ecommerce-project-db-df8de.appspot.com",
    messagingSenderId: "82827223395",
    appId: "1:82827223395:web:fdbcd85b3133db06737356",
    measurementId: "G-6LD40ZVK0Q"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

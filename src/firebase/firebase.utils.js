import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyALnOFugWLgbM4KygeizLo0_zdyWH6DQ0w",
    authDomain: "gauravtradersdb.firebaseapp.com",
    databaseURL: "https://gauravtradersdb.firebaseio.com",
    projectId: "gauravtradersdb",
    storageBucket: "gauravtradersdb.appspot.com",
    messagingSenderId: "501249437656",
    appId: "1:501249437656:web:6f7e0ff8af4c0e492e0cad"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "gauravtradersdb.firebaseapp.com",
    databaseURL: "https://gauravtradersdb.firebaseio.com",
    projectId: "gauravtradersdb",
    storageBucket: "gauravtradersdb.appspot.com",
    messagingSenderId: "501249437656",
    appId: "1:501249437656:web:6f7e0ff8af4c0e492e0cad"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) {
        return;
    }

    const userRef = firestore.doc(`users/${userAuth.uid}`); // query to get reference to user with id
    const snapShot = await userRef.get(); // query to get snapShot from reference

    if (!snapShot.exists) { // if user does not exist
        const { displayName, email } = userAuth; // take user details
        const createdAt = new Date(); // and current date-time

        try {
            await userRef.set({ // and create new user in database
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log("Error creating user:", error.message) // and if any error, log it in console
        }
    }

    return userRef; // and after all this is done, return reference back
}

firebase.initializeApp(config); // initializes firebase with our config

export const auth = firebase.auth(); // instantiated auth with firebase
export const firestore = firebase.firestore(); // instantiated firestore with firebase

const provider = new firebase.auth.GoogleAuthProvider(); // took google auth
provider.setCustomParameters({ prompt: 'select_account' }); // and selected "select account" page
export const signInWithGoogle = () => auth.signInWithPopup(provider); // and asking to open popup

export default firebase; // exporting entire firebase
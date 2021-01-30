import app from 'firebase/app';

// package authentification :

import 'firebase/auth';  

// package firestore :

import 'firebase/firestore';

// Configuration de l'application via firebase :


const config = {
    apiKey: "AIzaSyCBvCKFz2WXHa3C9G1mBnTugmLgoqxStTc",
    authDomain: "dbz-quiz-72440.firebaseapp.com",
    projectId: "dbz-quiz-72440",
    storageBucket: "dbz-quiz-72440.appspot.com",
    messagingSenderId: "317081299705",
    appId: "1:317081299705:web:400f3f39ca1938a125d028"
  };

class Firebase {
    constructor(){
        app.initializeApp(config);
        this.auth = app.auth();
        this.db = app.firestore();
    }

    // inscription :
    signUpUser = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);
    
    // Connexion :
    logInUser = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

    // Deconnexion :
    signOutUser = () => this.auth.signOut();

    // Recup Password :
    passwordReset = (email) => 
    this.auth.sendPasswordResetEmail(email);

    user = uid => this.db.doc(`users/${uid}`);
}

export default Firebase;
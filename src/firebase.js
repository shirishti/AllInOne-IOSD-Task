import firebase from "firebase";

const firebaseApp=firebase.initializeApp({
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

    apiKey: "AIzaSyAkvmLSLOq7LLZFXf8onLxBJYEOxWDYRcI",
    authDomain: "all-in-one-1c835.firebaseapp.com",
    projectId: "all-in-one-1c835",
    storageBucket: "all-in-one-1c835.appspot.com",
    messagingSenderId: "972470488512",
    appId: "1:972470488512:web:a3a9e84f768c5822930c25",
    measurementId: "G-JQVWBQ6W16"
 
});

const db=firebaseApp.firestore();
const auth=firebase.auth();
export {db,auth};
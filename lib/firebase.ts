import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCs9KRPfDjN8RMoFsJ-6EubgP_2azVOvzU",
    authDomain: "nextfire-aa0b0.firebaseapp.com",
    projectId: "nextfire-aa0b0",
    storageBucket: "nextfire-aa0b0.appspot.com",
    messagingSenderId: "677640446730",
    appId: "1:677640446730:web:1421668e605460b21410f3",
    measurementId: "G-FVG7KS5BQH",
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

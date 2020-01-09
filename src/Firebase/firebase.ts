import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
    apiKey: "AIzaSyAPMULtb21uBw-StzEA7q90LtzoidUw2_Y",
    authDomain: "calorimeter-2ff77.firebaseapp.com",
    databaseURL: "https://calorimeter-2ff77.firebaseio.com",
    messagingSenderId: "474556808319",
    projectId: "calorimeter-2ff77",
    storageBucket: "calorimeter-2ff77.appspot.com",
    appId: "1:474556808319:web:98fb291f5307935a92934a",
    measurementId: "G-TG6REZ5T0K"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
    console.log(firebase.apps.length, 'Firebase.apps.length')
}

export const auth = firebase.auth();
export const db = firebase.firestore();

console.log(auth, 'auth')
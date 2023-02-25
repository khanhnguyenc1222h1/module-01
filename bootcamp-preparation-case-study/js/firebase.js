// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBh_GKA5bib-A0nc7JVLbZh9nxxLucPiRo",
    authDomain: "khanhnguyen-casestudy.firebaseapp.com",
    projectId: "khanhnguyen-casestudy",
    storageBucket: "khanhnguyen-casestudy.appspot.com",
    messagingSenderId: "789320120669",
    appId: "1:789320120669:web:c57fa7bfefadcab36810b4",
    measurementId: "G-GGDPMR8EY3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
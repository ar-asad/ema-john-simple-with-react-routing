// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDMYixUgXAOu0F2NJhPentoZdUorjy35yU",
    authDomain: "ema-john-simple-react-routing.firebaseapp.com",
    projectId: "ema-john-simple-react-routing",
    storageBucket: "ema-john-simple-react-routing.appspot.com",
    messagingSenderId: "754119893916",
    appId: "1:754119893916:web:d6100ef107ae1d65fc9e59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

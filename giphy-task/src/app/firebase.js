// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0v7pNoed7i3hAF9GGj0Dyi-X7GgxUBLg",
  authDomain: "alphabi-auth.firebaseapp.com",
  projectId: "alphabi-auth",
  storageBucket: "alphabi-auth.appspot.com",
  messagingSenderId: "1052209698860",
  appId: "1:1052209698860:web:faf6591bce8ef0bfc5d989",
  measurementId: "G-E4J4X087XJ"
};

// Initialize Firebase
const app = getApps().length ? getApp(): initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth();


export  {app,auth}
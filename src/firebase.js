// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLxnWKN5vvaVeZ0c6MVWN6STi3_9hLIwY",
  authDomain: "siaha-map.firebaseapp.com",
  projectId: "siaha-map",
  storageBucket: "siaha-map.appspot.com",
  messagingSenderId: "1086401505524",
  appId: "1:1086401505524:web:13be0b2a7bbc9f67d696a1",
  measurementId: "G-CZP7RN9RGD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
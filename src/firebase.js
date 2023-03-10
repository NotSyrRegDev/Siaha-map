
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, doc, setDoc  , getDocs , getFirestore , where , query , deleteDoc  , updateDoc , increment  , getDoc } from "firebase/firestore";
import { signInWithEmailAndPassword , getAuth , signOut , createUserWithEmailAndPassword
 } from 'firebase/auth';


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
const db = getFirestore();
const auth = getAuth();


export { db , setDoc , doc , where , query , collection , getDocs   , deleteDoc , updateDoc , increment , getDoc , signInWithEmailAndPassword , createUserWithEmailAndPassword , auth , signOut } ;
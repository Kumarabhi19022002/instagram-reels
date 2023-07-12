import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyACgcWQlDtrjus7yGIwbqzopzNGL6JMa3I",
 
  authDomain: "reels-9adaa.firebaseapp.com",
  projectId: "reels-9adaa",
  storageBucket: "reels-9adaa.appspot.com",
  messagingSenderId: "678205741908",
  appId: "1:678205741908:web:3a2016a729c8d24c22c6c1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const firestore = firebase.firestore();
export const database = {
    users : firestore.collection('users'),
    posts : firestore.collection('posts'),
    comments : firestore.collection('comments'),
    getTimeStamp : firebase.firestore.FieldValue.serverTimestamp,
}

export const storage = firebase.storage()
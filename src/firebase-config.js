import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD_mgIXMyOdXTSpDYe50isH1wTBsLJjXHs",
  authDomain: "todoapp-18cf5.firebaseapp.com",
  projectId: "todoapp-18cf5",
  storageBucket: "todoapp-18cf5.appspot.com",
  messagingSenderId: "871774965280",
  appId: "1:871774965280:web:da2373e776707412347645"
});

const db = firebaseApp.firestore();
export default db;
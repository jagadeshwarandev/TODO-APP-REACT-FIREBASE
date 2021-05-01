import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  //API key comes here
});

const db = firebaseApp.firestore();
export default db;

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCa8nXsxR-6xdQQN5kvSI_AMEsc8U223BM",
  authDomain: "quote-machine-6a6ca.firebaseapp.com",
  databaseURL: "https://quote-machine-6a6ca.firebaseio.com",
  projectId: "quote-machine-6a6ca",
  storageBucket: "quote-machine-6a6ca.appspot.com",
  messagingSenderId: "255477153800",
  appId: "1:255477153800:web:9ea79dc2eebc6c8ae891bd",
  measurementId: "G-Z01C1XZKQX"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
db.settings({
  timestampsInSnapshots: true
});
firebase.analytics();
export default firebase;

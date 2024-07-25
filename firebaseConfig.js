import firebase from "firebase";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC3OX7-J6SZiPn_qET7K7a4Yq6opLPGHC4",
  authDomain: "mvmschool-4397d.firebaseapp.com",
  projectId: "mvmschool-4397d",
  storageBucket: "mvmschool-4397d.appspot.com",
  messagingSenderId: "595512531465",
  appId: "1:595512531465:web:323bcdd9bf0009e34df6d8",
  measurementId: "G-TJRPY50QYM",
};

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const storage = firebase.storage();
const store = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
const auth = app.auth();

export { storage, store, timestamp, auth };
export default app;
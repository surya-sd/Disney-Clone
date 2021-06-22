import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyD0z6CA5D9f84Bnhj4idJBb7TH7KYGa8Ks",
  authDomain: "hotstar-clone-d344d.firebaseapp.com",
  projectId: "hotstar-clone-d344d",
  storageBucket: "hotstar-clone-d344d.appspot.com",
  messagingSenderId: "534305774350",
  appId: "1:534305774350:web:c27350fd385f56732d555f",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
export const storage = firebase.storage();

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCmHHF7isfzEy6lovj7lKzjqkGLMPPTqP4",
  authDomain: "clone-76094.firebaseapp.com",
  projectId: "clone-76094",
  storageBucket: "clone-76094.appspot.com",
  messagingSenderId: "1040426028855",
  appId: "1:1040426028855:web:bb959393e8ec161d1f94b2",
  measurementId: "G-9RGSGQ05TB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

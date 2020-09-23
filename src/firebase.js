import { firebase } from "firebase";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyA600b05tU3ZdkT2cqn3DibtO4lWiO0Fsk",
  authDomain: "yata-d7556.firebaseapp.com",
  databaseURL: "https://yata-d7556.firebaseio.com",
  projectId: "yata-d7556",
  storageBucket: "yata-d7556.appspot.com",
  messagingSenderId: "258803255563",
  appId: "1:258803255563:web:5a4dcb9b5ac4c4f6653a0e",
});

export { firebaseConfig as firebase };

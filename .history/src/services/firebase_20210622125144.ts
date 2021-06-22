import firebase  from "firebase";
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "letask-eb0a8.firebaseapp.com",
  databaseURL: "https://letask-eb0a8-default-rtdb.firebaseio.com",
  projectId: "letask-eb0a8",
  storageBucket: "letask-eb0a8.appspot.com",
  messagingSenderId: "231436107153",
  appId: "1:231436107153:web:666cf2d7340d0d24eaee30"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database= firebase.database();
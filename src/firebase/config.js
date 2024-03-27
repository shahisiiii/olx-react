import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'; 
import 'firebase/compat/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsO7bQiDAL_Y70zw3VuVmuCzVPWIDwXEc",
  authDomain: "olx-react-f29a4.firebaseapp.com",
  projectId: "olx-react-f29a4",
  storageBucket: "olx-react-f29a4.appspot.com",
  messagingSenderId: "866021710616",
  appId: "1:866021710616:web:6f1c973b6063fa39ae5c6d",
  measurementId: "G-3GWFH5DKE3"
};

export default  firebase.initializeApp(firebaseConfig);


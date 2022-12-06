import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


//Setting up firebase API
const config = {
  apiKey: "AIzaSyA2YD04OVAR6-zNYxIdeZpJwm1g4uvtCro",
  authDomain: "apartmentsdolasilla.firebaseapp.com",
  databaseURL: "https://apartmentsdolasilla.firebaseio.com",
  projectId: "apartmentsdolasilla",
  storageBucket: "",
  messagingSenderId: "550477371352",
  appId: "1:550477371352:web:6dee3909bd71dd03"
};



export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
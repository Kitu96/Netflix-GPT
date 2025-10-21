// firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAwQxlRH-L0z2BWlhdd8f6tAggOkKZGxvg",
  authDomain: "netflixgpt-57fdc.firebaseapp.com",
  projectId: "netflixgpt-57fdc",
  storageBucket: "netflixgpt-57fdc.appspot.com",
  messagingSenderId: "375703241225",
  appId: "1:375703241225:web:bad479125c6a0cf1f8eed8",
  measurementId: "G-6DWGTFVS1T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
export { auth }; 

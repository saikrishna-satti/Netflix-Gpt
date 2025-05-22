// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBOUfMGBEUM_-0DpxlfZDrk7vGmgwWa04",
  authDomain: "netflixgpt-2650b.firebaseapp.com",
  projectId: "netflixgpt-2650b",
  storageBucket: "netflixgpt-2650b.firebasestorage.app",
  messagingSenderId: "652821604137",
  appId: "1:652821604137:web:1297a34f6110cd7d503938",
  measurementId: "G-WD2VY7N9WV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
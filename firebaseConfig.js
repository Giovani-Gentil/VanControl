import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZyFrw379NNMUyut2necXb_B7WmXkXSro",
  authDomain: "vancontrol-4d2e5.firebaseapp.com",
  databaseURL: "https://vancontrol-4d2e5-default-rtdb.firebaseio.com",
  projectId: "vancontrol-4d2e5",
  storageBucket: "vancontrol-4d2e5.firebasestorage.app",
  messagingSenderId: "615162579313",
  appId: "1:615162579313:web:77705d4f8f6234afad0ed0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app)

export { db };

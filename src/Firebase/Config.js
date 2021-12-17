import { getFirestore } from "firebase/firestore/lite";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCZyXvFzEwAbndPE9Ac0Jc1O-vn3BaeqiQ",
  authDomain: "store-react-19c2d.firebaseapp.com",
  projectId: "store-react-19c2d",
  storageBucket: "store-react-19c2d.appspot.com",
  messagingSenderId: "970010527270",
  appId: "1:970010527270:web:66d57f59f3fc3efde4c8e7"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

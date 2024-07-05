// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB2ii1CPLl352-7J_1iQ2wTYxpbD3M21z8",
  authDomain: "aplikasireecheff.firebaseapp.com",
  projectId: "aplikasireecheff",
  storageBucket: "aplikasireecheff.appspot.com",
  messagingSenderId: "446473854892",
  appId: "1:446473854892:web:4a7a4596136d926314a409",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
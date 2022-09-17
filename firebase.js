//import the functions you need froim the SDKs you need

import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your Web Apps Firebase Configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBwO5kP8z7M4mmEAdKL7q9gcMzxNGxJR-g',
  authDomain: 'instagram-clone-42c5a.firebaseapp.com',
  projectId: 'instagram-clone-42c5a',
  storageBucket: 'instagram-clone-42c5a.appspot.com',
  messagingSenderId: '336251254975',
  appId: '1:336251254975:web:4090f1f27ae077cb3c2e0a',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };

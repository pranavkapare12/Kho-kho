// firebase.js (FINAL PRODUCTION VERSION)
import { initializeApp, getApps, getApp } from 'firebase/app';
import { initializeFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB2zRt2iT15Yz5SjPI651voi5WQKXg49RA',
  authDomain: 'khokhoscorer.firebaseapp.com',
  projectId: 'khokhoscorer',
  storageBucket: 'khokhoscorer.firebasestorage.app',
  messagingSenderId: '288183165949',
  appId: '1:288183165949:web:5943c8cc2aa049e6872f94',
  measurementId: 'G-Y23KNYRNDR',
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const db = initializeFirestore(app, {
  useFetchStreams: false,
  experimentalForceLongPolling: true,
});

export default app;

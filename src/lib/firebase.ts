import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCsu-BwBmTFHh5Ncoo4LG4IvP-Tr3ylRpg",
  authDomain: "switcher-891cc.firebaseapp.com",
  projectId: "switcher-891cc",
  storageBucket: "switcher-891cc.appspot.com",
  messagingSenderId: "383499735812",
  appId: "1:383499735812:web:131858fa1bb59bead97651"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
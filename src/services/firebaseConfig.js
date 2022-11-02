import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCsZQloSoDQgKG8B383KpyKDD5btRJ41As',
  authDomain: 'dionelgoin-coder-react.firebaseapp.com',
  projectId: 'dionelgoin-coder-react',
  storageBucket: 'dionelgoin-coder-react.appspot.com',
  messagingSenderId: '571344833398',
  appId: '1:571344833398:web:f6f2d79f9d86013b874857',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

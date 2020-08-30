import firebase from 'firebase';
import firebaseConfig from '@/firebase/config';

try {
  firebase.app();
} catch (error) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;

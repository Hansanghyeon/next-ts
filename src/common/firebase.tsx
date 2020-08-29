import firebase from 'firebase';
import firebaseConfig from '@/config/firebase';

try {
  firebase.app();
} catch (error) {
  console.log(firebaseConfig);
  firebase.initializeApp(firebaseConfig);
}

export default firebase;

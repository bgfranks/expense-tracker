import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCyAy6zPWKPt6ji5Bqt9gWtCN-R72babqA',
  authDomain: 'expensely-c2137.firebaseapp.com',
  projectId: 'expensely-c2137',
  storageBucket: 'expensely-c2137.appspot.com',
  messagingSenderId: '627067668273',
  appId: '1:627067668273:web:9df2dc21c9e9efd19ed210',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init firestore
const db = firebase.firestore();

// init firebase auth
const auth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { db, auth, timestamp };

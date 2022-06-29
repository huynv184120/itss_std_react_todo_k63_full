// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AUINsnaiSSINSJAISJisanjhduaGunJKmLKakaq",
  authDomain: "fir-sample-a04d1.firebaseapp.com",
  projectId: "fir-sample-a04d1",
  storageBucket: "fir-sample-a04d1.appspot.com",
  messagingSenderId: "1827878178",
  appId: "1:12148374:web:nxcbyhb42j3287ddnd72nd"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth()
const db = firebase.firestore()

export { auth, db }
export default firebase
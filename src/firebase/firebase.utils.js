import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBPExylOxblVbPxdkgYbpVhAmqLJLDMw1M",
    authDomain: "clothes-martdb.firebaseapp.com",
    databaseURL: "https://clothes-martdb.firebaseio.com",
    projectId: "clothes-martdb",
    storageBucket: "clothes-martdb.appspot.com",
    messagingSenderId: "74667274830",
    appId: "1:74667274830:web:711d67bf7f0257d0ed891f",
    measurementId: "G-6TVFRZW69Y"
  };

  firebase.initializeApp(firebaseConfig)

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

// import { initializeApp } from "firebase/app";
// import {getAuth,GoogleAuthProvider} from 'firebase/auth';
// const firebaseConfig = {
//   apiKey: "AIzaSyBCjKB86LsJnvONY5WHWx-O4jfuQtdazoQ",
//   authDomain: "abiding-splicer-316511.firebaseapp.com",
//   projectId: "abiding-splicer-316511",
//   storageBucket: "abiding-splicer-316511.appspot.com",
//   messagingSenderId: "91267016739",
//   appId: "1:91267016739:web:a386cf4445f6e1923a6996"
// };

// const app = initializeApp(firebaseConfig);
// export const auth=getAuth(app)
// export const providerGoogle = new GoogleAuthProvider();

import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyDoLSHrj5PspCAYGAwaJsVmi3X5MMtuEc4",
  authDomain: "my-app-c62ba.firebaseapp.com",
  projectId: "my-app-c62ba",
  storageBucket: "my-app-c62ba.appspot.com",
  messagingSenderId: "385159583983",
  appId: "1:385159583983:web:8a5d678b44d621ce26231a",
  measurementId: "G-18D9SVGD8X"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const providerGoogle = new GoogleAuthProvider();
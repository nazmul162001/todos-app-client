import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyC4i1MZxo-CltELPBZnjo7guFd5rIhqdgc",
  authDomain: "todos-app-30758.firebaseapp.com",
  projectId: "todos-app-30758",
  storageBucket: "todos-app-30758.appspot.com",
  messagingSenderId: "972818578405",
  appId: "1:972818578405:web:87b086ecfcc54f70e9cd0c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

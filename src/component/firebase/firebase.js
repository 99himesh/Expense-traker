import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyDOBKsBkoQ9LTBCmp3LobdP7sg6C7JCzRM",
  authDomain: "api-calls-fa398.firebaseapp.com",
  databaseURL: "https://api-calls-fa398-default-rtdb.firebaseio.com",
  projectId: "api-calls-fa398",
  storageBucket: "api-calls-fa398.appspot.com",
  messagingSenderId: "1074317967359",
  appId: "1:1074317967359:web:da483d100981436b3a71ca"
};

const app = initializeApp(firebaseConfig);

const auth=getAuth();
export {app,auth};
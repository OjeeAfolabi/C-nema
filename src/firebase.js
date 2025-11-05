import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import {
  getFirestore,
  createUserWithEmailAndPassword,
  addDoc,
  collection,
} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAwXErra7wsAQl00TGqXndzEevFotwuS0U",
  authDomain: "c-nema-84bd0.firebaseapp.com",
  projectId: "c-nema-84bd0",
  storageBucket: "c-nema-84bd0.firebasestorage.app",
  messagingSenderId: "258020642731",
  appId: "1:258020642731:web:58ee666ecc24fb30fd0cee",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, user), {
      uid: user.id,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    alert("Error during sign up: ", error.message);
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    alert("Error during sign in: ", error.message);
  }
};

const logout = () => {
  signOut(auth )
};


export {auth, db, login, signup, logout};
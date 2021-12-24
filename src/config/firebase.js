import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBO9lPBF3QiVJZ3Vpnne9ClcvYPiX-t5zE",
  authDomain: "gamers-85572.firebaseapp.com",
  projectId: "gamers-85572",
  storageBucket: "gamers-85572.appspot.com",
  messagingSenderId: "747760693805",
  appId: "1:747760693805:web:64389c9d251131e7537ea4"
};

// Initialize Firebase
const initAuthentication = () => {
    return initializeApp(firebaseConfig);
}
export default initAuthentication;
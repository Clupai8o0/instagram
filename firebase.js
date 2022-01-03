import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyBBcofg1msCyrQzhba5HT1swF3xtv038hA",
	authDomain: "instagram-f55da.firebaseapp.com",
	projectId: "instagram-f55da",
	storageBucket: "instagram-f55da.appspot.com",
	messagingSenderId: "246056503937",
	appId: "1:246056503937:web:bf81b3b4ae5f29f0955b80",
};

//* singleton
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };

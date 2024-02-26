//IOS: 117942256103-h1g3mcad4lkn2ch7cgfrrgbsckglhrsk.apps.googleusercontent.com
//Android: 117942256103-pak62neskd7i4nvjgsgouequhj2nme1t.apps.googleusercontent.com

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import Constants from "expo-constants";

const firebaseConfig = {
  apiKey: Constants.expoConfig.extra.apiKey,
  authDomain: Constants.expoConfig.extra.authDomain,
  projectId: Constants.expoConfig.extra.projectId,
  storageBucket: Constants.expoConfig.extra.storageBucket,
  messagingSenderId: Constants.expoConfig.extra.messagingSenderId,
  appId: Constants.expoConfig.extra.appId,
  databaseURL: Constants.expoConfig.extra.databaseURL
};

initializeApp(firebaseConfig);

export const database = getFirestore();

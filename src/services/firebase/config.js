import { AsyncStorage } from '@react-native-async-storage/async-storage'
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAyb1vlupF6Q3XUxivmcOT3HfOVwmhjjJs",
  authDomain: "whaleapp-9bd9e.firebaseapp.com",
  projectId: "whaleapp-9bd9e",
  storageBucket: "whaleapp-9bd9e.appspot.com",
  messagingSenderId: "755999365490",
  appId: "1:755999365490:web:9d50b6b6790ee31771a5eb"
};

export const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});
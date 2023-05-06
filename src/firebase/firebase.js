// import * as firebase from 'firebase'
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

// Configure Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDQzlrtF6x7C8LcloZk7uCs2G5eKwVYnFA",
  authDomain: "comarca-23160.firebaseapp.com",
  projectId: "comarca-23160",
  storageBucket: "comarca-23160.appspot.com",
  messagingSenderId: "353219677066",
  appId: "1:353219677066:web:98c09cbcfb786338291673",
  measurementId: "G-RNL39QLMTK"
}

export const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)

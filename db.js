import firebase from 'firebase/app'
import 'firebase/firestore'


// Initialize your firebase app
firebase.initializeApp({
  apiKey: "AIzaSyDwgr4z8iraf1sFA9AJyccYNRH5gsRa4ps",
  authDomain: "threefood-cb5cf.firebaseapp.com",
  databaseURL: "https://threefood-cb5cf-default-rtdb.firebaseio.com",
  projectId: "threefood-cb5cf",
  storageBucket: "threefood-cb5cf.appspot.com",
  messagingSenderId: "1020302812975",
  appId: "1:1020302812975:web:8b8cb0e291d0d05894e3da",
  measurementId: "G-GY884YNCEG"
})
firebase.firestore().settings({ timestampsInSnapshots: true })

export const db = firebase.firestore()
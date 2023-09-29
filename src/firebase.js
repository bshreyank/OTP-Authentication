/////////////////////////////////////////////////////////////
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'

import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD2nXkpG6oDR7IY0sM3fy7Z9aegppfMz5I',

  authDomain: 'otp-project-2-f7685.firebaseapp.com',

  projectId: 'otp-project-2-f7685',

  storageBucket: 'otp-project-2-f7685.appspot.com',

  messagingSenderId: '326510549766',

  appId: '1:326510549766:web:706a534d843c8ff6259c87',
}

// Initialize Firebase
initializeApp(firebaseConfig)
export default firebase;

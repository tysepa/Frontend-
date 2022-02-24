import { initializeApp } from "https://www.gstatic.com/firebasejs/8.0.0/firebase-app.js";
// import { getDatabase } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/8.0.0/firebase-auth.js";

 

  const firebaseConfig = {

    apiKey: "AIzaSyADkjzWdsAvsGkiFnAmGGilLj5fgcOB5E0",

    authDomain: "form-f8158.firebaseapp.com",

    projectId: "form-f8158",

    storageBucket: "form-f8158.appspot.com",

    messagingSenderId: "47398934184",

    appId: "1:47398934184:web:2230d1e2079cb2a8da149d"

  };


  // Initialize Firebase

  const app = initializeApp(firebaseConfig);
//   const database = initializeApp(app);

  const auth = getAuth(app);

  document.getElementById('sinup').addEventListener('click',function(){
      let email = document.getElementById('email').value;
      let password = document.getElementById('password').value;
      let auth = document.getElementById('username').value;

    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    alert('User created')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    alert('erroMessage')
  });
  })
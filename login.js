

//  declaration of variables 
const logInForm = document.querySelector('#signin'); // creating a variable to access the log in form from login.html

// login authentication
logInForm.addEventListener('click', (e)=>{
    e.preventDefault()
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then((userCredential) => {
    console.log("Logged In")
    location.href='dashboard.html'
  });

})

function logout() {
    firebase.auth().signOut().then(res=>{
        firebase.auth().onAuthStateChanged(user => {
            if (user) {

            } else {
                location.href = "../login.html"
            }
        })
    })
}
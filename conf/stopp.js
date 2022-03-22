const preventBack=()=>{
    // e.preventDefault()
    window.history.forward()
};
setTimeout("preventBack()",0);
window.onunload = ()=>{
    null;

}

firebase.auth().onAuthStateChanged(user => {
    if (user) {
        
    } else {
        location.href = '../login.html';
    
    }
})
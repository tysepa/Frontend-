// const firebaseConfig = {
//     apiKey: "AIzaSyCx-U4VkwnRSZEdsuMbMJNYq5EjPEqGRIA",
//     authDomain: "crud-de5f7.firebaseapp.com",
//     projectId: "crud-de5f7",
//     storageBucket: "crud-de5f7.appspot.com",
//     messagingSenderId: "16546212598",
//     appId: "1:16546212598:web:b2a36c5f2bc18dde4f5ad7"
//   };

//   firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();


// const modalWrapper = document.querySelector('.modal-wrapper');

// const addModal = document.querySelector('.add-modal');
const addModalFormTrue = document.querySelector('.contact-left .form');
// const btnAns = document.querySelector('.btn-ans');
// const tableUsers = document.querySelector('.table-users');




addModalFormTrue.addEventListener('submit', e =>{
    e.preventDefault();
    // console.log(addModalForm.fullName.value)

    db.collection('users').add({
        fullName:addModalFormTrue.fullName.value,
        email: addModalFormTrue.email.value,
        message: addModalFormTrue.message.value,
    });
    // modalWrapper.classList.remove('modal-show');
    addModalFormTrue.fullName.value='';
    addModalFormTrue.email.value='';
    addModalFormTrue.message.value=''
})
db.collection('users').get().then(querySnapshot =>{
    querySnapshot.forEach(doc =>{
        console.log(doc.data());
    })
});

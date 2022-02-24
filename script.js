// import{initializeApp} from 'firebase/app'
// import{getFirestore,collection, getDocs} from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyCx-U4VkwnRSZEdsuMbMJNYq5EjPEqGRIA",
    authDomain: "crud-de5f7.firebaseapp.com",
    projectId: "crud-de5f7",
    storageBucket: "crud-de5f7.appspot.com",
    messagingSenderId: "16546212598",
    appId: "1:16546212598:web:b2a36c5f2bc18dde4f5ad7"
  };

  firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
// ==============================================================

const modalWrapper = document.querySelector('.modal-wrapper');

const addModal = document.querySelector('.add-modal');
const addModalForm = document.querySelector('.add-modal .form');
const btnAns = document.querySelector('.btn-ans');
const tableUsers = document.querySelector('.table-users');
// ======================================================================
const renderUser = doc =>{
    const tr =`
    <tr data-id='${doc.id}'>
        <td>${doc.data().fullName}</td>
        <td>${doc.data().email}</td>
        <td>${doc.data().message}</td>
        <td>
            <button class="btn btn-edit">Edit</button>
            <button class="btn btn-delet">Delete</button>
        </td>
    </tr>
    
    `;
    tableUsers.insertAdjacentHTML('beforeend',tr);

    const btnDelete = document.querySelector(`[data-id='${doc.id}'].btn-delete`);
    btnDelete.addEventListener('click',()=>{
        db.collection('users').doc(`${doc.id}`).delete().then(()=>{

            console.log('Document succesfully deleted!');
        }).catch(err =>{
            console.log('Error removing document', err);
        });
    });
}
// ==============================================================

btnAns.addEventListener('click',()=>{
    
    addModal.classList.add('modal-show');
})


window.addEventListener('click', e=>{
    if(e.target === addModal){
        addModal.classList.remove('modal-show');
    }
});
// ===============================================================
db.collection('users').get().then(querySnapshot =>{
    querySnapshot.forEach(doc =>{
        console.log(doc.data());
    })
}) 
// ========================================================================
addModalForm.addEventListener('submit', e =>{
    e.preventDefault();
    db.collection('users').add({
        fullName:addModalForm.fullName.value,
        email: addModalForm.email.value,
        message: addModalForm.message.value,
    });
    modalWrapper.classList.remove('modal-show');
})


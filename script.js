


const btnAns = document.querySelector('.btn-ans');
const addModal = document.querySelector(' .modal-wrapper');
// const addModalForm = document.querySelector('.form');


btnAns.addEventListener('click',()=>{
    
    addModal.classList.add('modal-show');
})
window.addEventListener('click', e=>{
    if(e.target === addModal){
        addModal.classList.remove('modal-show');
    }
});
// btnAdd.addEventListener('click',()=>{
//     selectModal.classList.add('modal-show')
// })
// window.addEventListener('click',e=>{
//     if(e.target === selectModal){
//         selectModal.classList.remove('modal-show')
//     }
// })
// ===============================================================
// db.collection('users').get().then(querySnapshot =>{
//     querySnapshot.forEach(doc =>{
//         console.log(doc.data());
//     //     const tr =`
//     // <tr data-id='${doc.id}'>
//     //     <td>${doc.data().fullName}</td>
//     //     <td>${doc.data().email}</td>
//     //     <td>${doc.data().message}</td>
//     //     <td>
//     //         <button class="btn btn-edit">Edit</button>
//     //         <button class="btn btn-delet">Delete</button>
//     //     </td>
//     // </tr>
    
//     // `;
//     // tableUsers.insertAdjacentHTML('beforeend',tr);
    
//     // })
 
// }) 
// ========================================================================
addModalForm.addEventListener('submit', e =>{
    e.preventDefault();
    // console.log(addModalForm.fullName.value)

    db.collection('users').add({
        fullName:addModalForm.fullName.value,
        email: addModalForm.email.value,
        message: addModalForm.message.value,
    });
    modalWrapper.classList.remove('modal-show');
})


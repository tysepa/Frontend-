
const addModalFormTrue = document.querySelector('.contact-left .form');




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

// delete function
db.collection('users').get().then(querySnapshot =>{
    querySnapshot.forEach(doc =>{
        console.log(doc.data());
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
     const btnDelete = document.querySelector(`[data-id='${doc.id}'] .btn-delet`);
     btnDelete.addEventListener('click',()=>{
         db.collection('users').doc(`${doc.id}`).delete().then(()=>{
             console.log('Document succesfully deleted!');
         }).catch(err =>{
             console.log('Error removing document', err);
         });
         
     });
    })
})
// firebase connect
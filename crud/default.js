



const changePreviewOnUpload = (fileName, fileType, fileSize, previewURL)=>{
    if(fileType.includes('image')){
        imagePreview.setAttribute('src', previewURL)
    }else{
        imagePreview.setAttribute('src', 'images/insertphoto.png')
    }
    previewDescription.textContent = fileName;
    previewSize.textContent=`${Math.round(fileSize/1024)} kb`;
    clearButton.style.display ='inline-flex'
}

fileInputElement.addEventListener('change', e=>{
    const fileObject = fileInputElement.files[0]
    console.log(fileObject)

    const objectURL = URL.createObjectURL(fileObject)
    console.log(objectURL)

    changePreviewOnUpload(fileObject.name, fileObject.type, fileObject.size, objectURL)
})

clearButton.addEventListener('click', e=>{
    imagePreview.setAttribute('src','images/insertphoto.png')

    previewDescription.textContent =''
    previewSize.textContent = ''

    clearButton.style='none'
})

const btnSend = document.getElementById('btn-modal')

const upload=()=>{

    let image = document.getElementById('preview-image').files[0];
    let post = document.getElementById('post');
    let imageName = image.name;
    let storageRef = firebase.storage().ref('images/'+imageName);
    let uploadTask = storageRef.put(image);

    uploadTask.an('state_shanged', function(snapshot){
        let progress =(snapshot.bytesTransferred/snapshot.totalBytes)*100;
        console.log('upload is '+progress +'done');
    },function(error){
        console.log(error)
      
    },function(){
        uploadTask.snapshot.ref.getDowloadURL().then(function(downloadURL){
            db.ref('blogs/').push().set({
                text:post,
                imageURL:downloadURL
            },function(error){
                if(error){
                    alert("error while uploading");

                }else{
                    alert("Successfully uploaded")
                    document.getElementById(post-form).requestFullscreen();
                
                }
            })
        })
    
    })

};
// write any thing here

const anyThing = ()=>{
    alert(TypeError);
}
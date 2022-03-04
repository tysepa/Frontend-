const fileInputElement = document.querySelector('input#input1');
const clearButton = document.querySelector('.clear_btn');
const imagePreview = document.querySelector('.preview-image');
const previewDescription = document.querySelector('.preview-description');
const previewSize = document.querySelector('.preview-size');

const btnSend = document.getElementById('btn-success')

function upload() {

    var image = document.getElementById('image').files[0];
    var post = document.getElementById('post').value;
    var imageName = image.name;
    var storageRef = firebase.storage().ref('images/' + imageName);
    var uploadTask = storageRef.put(image);

    uploadTask.on('state_shanged', function (snapshot) {
        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('upload is ' + progress + 'done');
    }, function (error) {
        console.log(error)

    }, function () {
        uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
            firebase.database().ref('blogs/').push().set({
                text: post,
                imageURL: downloadURL
            }, function (error) {
                if (error) {
                    alert("error while uploading");

                } else {
                    alert("Successfully uploaded")
                    document.getElementById('post-form').reset();
                    getdata();
                }
            })
        })

    })

};
window.onload=function(){
    this.getdata();
}

function getdata(){
    firebase.database().ref('blogs/').once('value').then(function(snapshot){
        // get your posts div
        var posts_div = document.getElementById('posts');
        // remove all remaining data in that div
        posts.innerHTML = "";
        //get data from firebase
        var data = snapshot.val();
        console.log(data);
        // now pass this data to our pasts div
        // we have to pass our data to for loop to get one by one
        for(let[key, value] of Object.entries(data)){
            posts_div.innerHTML = "<div class='part'>"+
              "<div class='box'>"+ 
              "<img  src='"+value.imageURL+"' style ='height:200px;' onclick='select()'>"+
              "<div class='card-body'><p class='card-text'>"+value.text+"</p>"+
              "<button class='btn btn-delet' id='"+key+"'onclick='delete_post(this.id)'>Delete</button>"+
              "<button class='btn btn-edit' id='"+key+"'onclick='edit_post(this.id)'>Edit</button>"+
              "</div></div></div>"+posts_div.innerHTML;
        }
    })
}

function delete_post(key){

        var txt;
        if (confirm("Are you sure!")) {
          txt =  firebase.database().ref('blogs/'+key).remove().then(()=>{
            console.log("Successfull Deleted!")
        });
        getdata();
        } else {
          txt = "You pressed Cancel!";
        }
        document.getElementById("mt-2").innerHTML = txt;
   
    // console.log('deleted well')
}

function select(){

    var image = document.getElementById('image').files[0];
    var post = document.getElementById('post').value;
    var imageName = image.name;
    
    firebase.database().ref('images/' + imageName).on('value', function(snapshot){
        document.getElementById('post').value = snapshot.val().text;
        document.getElementById('image').value = snapshot.val().imageURL;
})


function edit_post(){
    getdata();

    var updates={
        text: post,
        imageURL: downloadURL
    }

    firebase.database().ref('blogs/'+post).update(updates)
    alert('Updated')
}
}

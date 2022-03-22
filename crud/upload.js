const fileInputElement = document.querySelector('input#input1');
const clearButton = document.querySelector('.clear_btn');
const imagePreview = document.querySelector('.preview-image');
const previewDescription = document.querySelector('.preview-description');
const previewSize = document.querySelector('.preview-size');

const btnSend = document.getElementById('btn-success')

function upload() {

    var image = document.getElementById('image').files[0];
    var number = document.getElementById('number').value;
    var title = document.getElementById('title').value;
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
                number:number,
                title:title,
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
              "<img id='img' src='"+value.imageURL+"' style ='height:200px;' onclick=''>"+
              "<p class='text'>"+value.title+"</p>"+"<p class='card-text'>"+value.text+"</p>"+"<p class='card-text'>"+value.number+"</p>"+
              "<button class='btn btn-delet' id='"+key+"'onclick='delete_post(this.id)'>Delete</button>"+
              "<button class='btn btn-edit' id='"+key+"'onclick='edit_post(this.id)'>Edit</button>"+
              "<button class='btn btn-edit' id='"+key+"'onclick='select_post(this.id)' id='select'>Select</button>"+
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
        document.querySelector(".box").innerHTML = txt;
   
    // console.log('deleted well')
}
// var image, number, title, post;ss
// function ready(){

//      image = document.getElementById('image').files[0];
//      number = document.getElementById('number').value;
//      title = document.getElementById('title').value;
//      post = document.getElementById('post').value;
// }
// function select_post(){
//     // ready();
//          firebase.database().ref('blogs/',+number).on('value', function(snapshot){
//         document.getElementById('image').files[0]= snapshot.val().imageURL;
//         document.getElementById('number').value=snapshot.val().number;
//         document.getElementById('title').value=snapshot.val().title;
//         document.getElementById('post').value=snapshot.val().text;
//     });
// }

function edit_post(){
    getdata();
    var number = document.getElementById('number').value;
    var title = document.getElementById('title').value;
    var post = document.getElementById('post').value;
    
    
    var updates={
        title:title,
        text: post,
        number: number
        
    }

    firebase.database().ref('blogs/'+number).update(updates)
    alert('Updated')
    // firebase.database().ref('blogs/'+number).remove().then(()=>{
    
    // });
}

// var image = document.getElementById('image').files[0];
    //  var imageName = image.name;
    // var storageRef = firebase.storage().ref('images/' + imageName);
    // var uploadTask = storageRef.put(image);

// function select_post(){
//     imageName = document.getElementById('image').value;
//         firebase.database().ref('blogs/'+imageName).on('value', function(){
//             document.getElementById('img').src =snapshot.val().link;
//         })

// }

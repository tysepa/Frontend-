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
              "<div class='box'>"+ "<img src='"+value.imageURL+"' style ='height:250px;'>"+
              "<div class='card-body'><p class='card-text'>"+value.text+"</p>"+
              "<button class='btn btn-edit' id='"+key+"'onclock='display-post(this.id)'>Read More</button>"+
              "</div></div></div>"+posts_div.innerHTML;
        }
    })
}


window.onload = function() {
  var blogDB = new Firebase('https://popping-inferno-5085.firebaseio.com/');

  //blogDB.push({name: "Here is my name", post: "Here is my post"});
  blogDB.on('child_added', function(snapshot) {
    var post = snapshot.val();
    console.log(post.name + " " + post.post);
  });
};

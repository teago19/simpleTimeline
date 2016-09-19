$.ajax({
    dataType: "json",
    url: "timeline.json",
    mimeType: "application/json",
    success: function(resultJson){
        var posts = resultJson
		console.log(posts.length);

		for (var i = 0; i < posts.length; i++) {
			//POST//
			var node = document.createElement("div");
			node.className = "col-sm-8 col-sm-offset-1";

			var divRow = document.createElement("div");
			divRow.className = "row panel panel-default";

			//AVATAR//
			var avatar = document.createElement("div");
			avatar.className = "avatar col-sm-3";
			avatar.innerHTML = '<img src="' + posts[i].user.picture + '" class="img-circle imgAvatar">' + 
								'<div class="avatarInfo"> <span class="avatarUsername">' + posts[i].user.username + '</span> </div>';
			document.getElementById("timeline").appendChild(node).appendChild(divRow).appendChild(avatar);

			//Post//
			var post = document.createElement("div");
			post.className = 'post col-sm-9';
			post.innerHTML = '<span class="postContent">' + posts[i].content + '</span>' +
								'<div> <span class="postDate">' + posts[i].date + '</span> </div>' +
								'</span> <span class="postLike glyphicon glyphicon-thumbs-up">' + posts[i].likes +  '</span> </div> ';
			document.getElementById("timeline").appendChild(node).appendChild(divRow).appendChild(post);

		}
    }
});


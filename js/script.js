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
			node.className = "col-sm-8 col-sm-offset-4";

			var divRow = document.createElement("div");
			divRow.className = "row media panel panel-default";

			//AVATAR//
			var avatar = document.createElement("div");
			avatar.className = "avatar col-sm-3 media-left";
			avatar.innerHTML = '<img src="' + posts[i].user.picture + '" class="img-circle imgAvatar">' + 
								'<div class="avatarInfo"> <span class="avatarUsername">' + posts[i].user.username + '</span> </div>';
			document.getElementById("timeline").appendChild(node).appendChild(divRow).appendChild(avatar);

			//Post//
			var post = document.createElement("div");
			post.className = 'post col-sm-9';
			post.innerHTML = '<span class="postContent">' + posts[i].content + '</span>';
			document.getElementById("timeline").appendChild(node).appendChild(divRow).appendChild(post);

		}
    }
});


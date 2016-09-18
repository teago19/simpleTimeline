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
			node.className = "col-sm-8 col-sm-offset-4 post";

			//AVATAR//
			var avatar = document.createElement("div");
			avatar.className = "avatar col-sm-4";
			avatar.innerHTML = '<img src="' + posts[i].user.picture + '" class="img-circle imgAvatar">' + 
								'<span class="nomeAvatar">' + posts[i].user.username + '</span>';
			document.getElementById("timeline").appendChild(node).appendChild(avatar);

		}
    }
});


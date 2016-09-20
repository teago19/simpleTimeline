/*
	//TENTAR ACESSAR O JSON PELO LINK NÃO PEGA POR CAUSA DE CORS
	
var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function(){
	if (this.readyState == 4 && this.status == 200) {
        var resultJson = JSON.parse(this.responseText);
        createTimeline(resultJson);
    }
};

xmlhttp.open("GET","http://vagalumewifi.com.br/timeline.json",true);
xmlhttp.send();

function createTimeline(resultJson){*/
window.onload = function() {
	var posts = timelineJson;

	for (var i = 0; i < posts.length; i++) {
		
		var node = document.createElement("div");
		node.className = "col-sm-8 col-sm-offset-2";

		var divRow = document.createElement("div");
		divRow.className = "row panel panel-default";

		//AVATAR//
		var avatar = document.createElement("div");
		avatar.className = "avatar col-sm-3";
		avatar.innerHTML = 	'<img src="' + posts[i].user.picture + '" class="img-circle imgAvatar">' + 
							'<div class="avatarInfo"> <span class="avatarUsername">' + posts[i].user.username + '</span> </div>';
		document.getElementById("timeline").appendChild(node).appendChild(divRow).appendChild(avatar);

		//Post//
		var post = document.createElement("div");
		post.className = 'post col-sm-9';
		post.innerHTML = '<span class="postContent">' + posts[i].content + '</span>' +
						'<div> <span class="postDate"> Posted from '+ posts[i].user.location + ' '+ posts[i].date + '</span> </div>' +
							'</span> <span class="postLike">' + posts[i].likes +  '</span> <span class="glyphicon glyphicon-thumbs-up postLikeThumbs"></span></div> ';
		document.getElementById("timeline").appendChild(node).appendChild(divRow).appendChild(post);

	}
}
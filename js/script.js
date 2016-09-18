var posts;

$.ajax({
    dataType: "json",
    url: "timeline.json",
    mimeType: "application/json",
    success: function(resultJson){
        posts = resultJson
		console.log(JSON.stringify(posts));
    }
});


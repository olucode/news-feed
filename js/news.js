$(document).ready(function() {
	
	function getNews()
	{
		var link = "https://newsapi.org/v1/sources?language=en?category=technology";

		$.getJSON(link, function(data) {
			console.log("JSON data has been retrieved");
		});
	}

	getNews();


});
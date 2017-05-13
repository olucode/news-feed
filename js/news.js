
$(document).ready(()=>{
	getNews();

	function getNews()
	{
		let url = "https://newsapi.org/v1/articles?source=mashable&sortBy=latest&apiKey=1cb3ca22268a477b9d2a2f65c940ecfa";

		$.getJSON(url, function(data) 
		{
			console.log("JSON data has been retrieved");

			printNews(data);
		});
	}

	function printNews(data)
	{
		let result = data.articles;

		let output = "";
		for(let i = 0; i < res.length; i++)
		{
			let link = "<a href='" + result[i].url + "' target='_blank'> ";
			let resultDiv = "<li class='well well-lg list-group-item'><div class='row'><div class='col-xs-5'><b><p>" + link + result[i].title + "</a></p></b><p>"+ result[i].description + "</p></div><div class='col-xs-2'></div><div class='col-xs-3'>" + link + "<img src='" + result[i].urlToImage +"'  class='img-responsive img-rounded'></a></div></div></li>";
			output += resultDiv;
		}
		$('#news-source').html("( " + data.source + " )")
		$('#printResults').html(output);
	}	

	function shuffleArray(array) {
	    for (var i = array.length - 1; i > 0; i--) {
	        var j = Math.floor(Math.random() * (i + 1));
	        var temp = array[i];
	        array[i] = array[j];
	        array[j] = temp;
	    }
	}
});

//  LocalWords:  href

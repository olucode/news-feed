$(document).ready(function() 
{
	getNews();

	function getNews()
	{

		let url = "https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=1cb3ca22268a477b9d2a2f65c940ecfa";

		$.getJSON(url, function(data) 
		{
			console.log("JSON data has been retrieved");
			let news = data.articles;
			console.log('The News source is: ' + data.source);
			for(let i in news)
			{
				console.log(news[i].title + " points to " + news[i].url);
			}
		});

	}

	function printNews(result)
	{

	}	

});
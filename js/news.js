$(document).ready(function() 
{
	getNews();

	function getNews()
	{
		let bbc = "https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=1cb3ca22268a477b9d2a2f65c940ecfa";
		let hackerNews = "";
		let urls = [];
		let url = "https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=1cb3ca22268a477b9d2a2f65c940ecfa";

		$.getJSON(url, function(data) 
		{
			console.log("JSON data has been retrieved");
			let news = data.articles;
			printNews(news);
		});
	}

	function printNews(result)
	{	
		let output = "";
		for(let i in result)
		{
			let link = "<a href='" + result[i].url + "'> ";
			let resultDiv = `<li class="well well-lg list-group-item">
						<div class="row">

							<div class="col-xs-5">
								<b><p><a href="${ link }" target="_blank">${ result[i].title }</a></p></b>
								<p> ${ result[i].description }. </p>
							</div>
							<div class="col-xs-2">
							</div>
							<div class="col-xs-3">
								<a href="${link}" target="_blank"><img src="${result[i].urlToImage}" class="img-responsive img-rounded"></a>
							</div>
						</div>	
					</li>`;
			output += resultDiv;
		}
		$('#printResults').html(output);
	}	

});

//  LocalWords:  href

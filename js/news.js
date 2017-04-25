$(document).ready(function() 
{
	getNews();

	function getNews()
	{
		let endPoint = "https://newsapi.org/v1/articles";
		let apiKey = "1cb3ca22268a477b9d2a2f65c940ecfa";
		let urls = {
			"bbc" : `${endPoint}?source=bbc-news&sortBy=top&apiKey=${apiKey} `,
			"guardian-uk" : `${endPoint}?source=the-guardian-uk&sortBy=top&apiKey=${apiKey} `,
			"hacker-news" : `${endPoint}?source=hacker-news&sortBy=top&apiKey=${apiKey} `,
			"mashable" : `${endPoint}?source=mashable&sortBy=latest&apiKey=${apiKey} `,
			"tnw": `${endPoint}?source=the-next-web&sortBy=latest&apiKey=${apiKey}`
		};

		let allResponses = {};
		for(var i in urls)
		{
			$.getJSON(urls[i], function(data) 
			{
				console.log("JSON data has been retrieved");
				let news = data.articles;
				printNews(news);
			});
		}	
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

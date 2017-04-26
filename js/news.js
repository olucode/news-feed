
$(document).ready(()=>{
	getNews();

	function getNews()
	{
		let endPoint = "https://newsapi.org/v1/articles";
		let apiKey = "1cb3ca22268a477b9d2a2f65c940ecfa";
		let urls = [
			`${endPoint}?source=google-news&sortBy=top&apiKey=${apiKey} `,
			`${endPoint}?source=engadget&sortBy=latest&apiKey=${apiKey} `
		];

		let allResults = [];

		let count = urls.length-1;
		const get =(real)=>{
			$.getJSON(urls[ count ], function(data) {
			console.log("JSON data has been retrieved from " + data.source);
			let news = data.articles;
			allResults.push(news)
			// printNews(news);
			real();
			})
		};
		recurse();		

		function recurse(){
			if(count >= 0){
				get(recurse);
				count--;
			}
			else
				printNews(allResults);
		}
	}


	function printNews(result)
	{	

		let res=[];
		result.map(list=>{
			// console.log(list)
			return list.map(item=>{
				// console.log(item)
				res.push(item)})})
		console.log(res)
		shuffleArray(res);		
		let output = "";
		for(let i = 0; i < res.length; i++)
		{

			let link =  res[i].url;
			let resultDiv = `<li class="well well-lg list-group-item">
						<div class="row">

							<div class="col-xs-5">
								<b><p><a href="${ link }" target="_blank">${ res[i].title }</a></p></b>
								<p> ${ res[i].description }. </p>
							</div>
							<div class="col-xs-2">
							</div>
							<div class="col-xs-3">
								<a href="${link}" target="_blank"><img src="${res[i].urlToImage}" class="img-responsive img-rounded"></a>
							</div>
						</div>	
					</li>`;
			output += resultDiv;
		}
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

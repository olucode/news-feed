$(document).ready(function () {
	
	$('#search').submit(function(event) {
		event.preventDefault();
		var query = $("#query").val();
		console.log("The query value is " + query);
		wikiSearch(query);
	});

	function wikiSearch(value) {
	    var url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=15&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=' + value + '&callback=?';

	    $.getJSON(url, function (data) {
	    	console.log("JSON data has been retrieved");
	    	printResults(data.query.pages);
	    });
	}

	function printResults(result){
		var out = "";
		for (var i in result) {
			var title = result[i].title;
			var link = "https://en.wikipedia.org?curid=" + result[i].pageid
			if(result[i].thumbnail){
				var resultDiv = "<div class='col-xs-10 col-xs-offset-1 results'> <div class='col-xs-2'> <div class='thumbnail'> <img src=' " + result[i].thumbnail.source + " ' alt='No Image to Display' > </div> </div> <div class='col-xs-10'> <a href=' " + link +  " ' target='_blank' > <h2> " + title + "</h2> </a> ";
			}
			else{
				var resultDiv = "<div class='col-xs-10 col-xs-offset-1 results'> <div class='col-xs-10'> <h2> <a href=' " + link + " ' target='_blank' > " + title + "</a> </h2> ";
			}
			if (result[i].extract) {
				var addExtract = "<p>" + result[i].extract + "</p> </div> </div> ";
				resultDiv += addExtract;
			}
			resultDiv += "</div> </div>";
			out += resultDiv;
		}
		$('#search-results').html(out);
	}

});
var relatedContent = "https://en.wikipedia.org/wiki/Earthquake";
var relatedContentTag = "About earthquakes"


function init()
{
	document.getElementById("related-one").innerHTML = relatedContentTag; //Doesn't work right now.
}

function nextArticle()
{
	document.getElementById("article-viewer").src = relatedContent;
}

//init();
var articleLinks = [
"https://www.cnn.com/2018/02/17/politics/white-house-responds-mueller/index.html",
"http://abcnews.go.com/International/75-magnitude-earthquake-rocks-mexico/story?id=53154547",
"http://www.foxnews.com/us/2018/02/18/nikolas-cruz-showed-no-warning-signs-before-florida-school-shooting-say-couple-who-took-him-in.html"
];

var articleTitles = [
"Trump responds to Mueller indictment news",
"7.2 magnitude earthquake rocks Mexico, 2 killed in chopper crash",
"Nikolas Cruz showed no warning signs before Florida school shooting, say couple who took him in"
];

var articleOne = 0;
var articleTwo = 1;

var numArticles = 3;

$(document).ready(function() {
	$(".interest-tag-wrapper").click(function() {
		if ($(this).find('img').css('opacity') == '0.4') {
			$(this).find('img').css('opacity', '1.0');
		}
		else {
			$(this).find('img').css('opacity', '0.4');
		}
	});
});

$(document).ready(function(){
    $("#submit-sign-up").click(function(){
        $(".sign-up-confirmation").show();
    });
});

function nextArticleFirst() 
{
	articleOne = (articleOne + 1) % numArticles;
	document.getElementById("event-title-one").innerHTML = articleTitles[articleOne].link(articleLinks[articleOne]);

}

function prevArticleFirst() 
{
	articleOne = (articleOne + 2) % numArticles;
	document.getElementById("event-title-one").innerHTML = articleTitles[articleOne].link(articleLinks[articleOne]);
}

function nextArticleSecond()
{
	articleTwo = (articleTwo + 1) % numArticles;
	document.getElementById("event-title-two").innerHTML = articleTitles[articleTwo].link(articleLinks[articleTwo]);
}

function prevArticleSecond()
{
	articleTwo = (articleTwo + 2) % numArticles;
	document.getElementById("event-title-two").innerHTML = articleTitles[articleTwo].link(articleLinks[articleTwo]);
}



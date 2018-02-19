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

var featuredArticleLinks = [
"https://www.cnn.com/2018/02/17/politics/white-house-responds-mueller/index.html",
"http://abcnews.go.com/International/75-magnitude-earthquake-rocks-mexico/story?id=53154547"
];

var featuredArticleTitles = [
"Trump responds to Mueller indictment news",
"7.2 magnitude earthquake rocks Mexico, 2 killed in chopper crash"
];


var articleOne = 0;
var articleTwo = 1;
var featuredArticle = 0;

var numArticles = 3;
var numFeaturedArticles = 2

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

/*function SignUpConfirmation() {
    var x = document.getElementById("SignUpConfirmation");
    x.style.display = "block";
}*/

function SignUpConfirmation() {
		var x = document.getElementById("SignUpConfirmation");
    var a = document.forms["create-account-fields"]["first-name-field"].value;
		var b = document.forms["create-account-fields"]["last-name-field"].value;
		var d = document.forms["create-account-fields"]["e-mail-field"].value;
		var e = document.forms["create-account-fields"]["username-field"].value;
		var f = document.forms["create-account-fields"]["password-field"].value;
		var g = document.forms["create-account-fields"]["confirm-password-field"].value;
    if (a === "" || b === "" || d === "" || e === "" || f === "" || g === "") {
			x.style.display = "none";
			alert("Please fill in all required fields!");
      event.preventDefault();
    }
		else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(d) === false) {
			x.style.display = "none";
			alert("Invalid E-mail!");
      event.preventDefault();
		}
		else if (f != g) {
			x.style.display = "none";
			alert("Passwords do not match!");
			event.preventDefault();
		}
		else if (f.length < 8 || g.length < 8) {
			x.style.display = "none";
			alert("Password must be at least 8 characters long!");
			event.preventDefault();
		}
		else {
			x.style.display = "block";
			event.preventDefault();
		}
}


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

function nextArticleFeatured()
{
	featuredArticle = (featuredArticle + 1) % numFeaturedArticles;
	document.getElementById("featured-event-title").innerHTML = featuredArticleTitles[featuredArticle].link(featuredArticleLinks[featuredArticle]);
}

function prevArticleFeatured()
{
	featuredArticle = (featuredArticle + 1) % numFeaturedArticles;
	document.getElementById("featured-event-title").innerHTML = featuredArticleTitles[featuredArticle].link(featuredArticleLinks[featuredArticle]);
}



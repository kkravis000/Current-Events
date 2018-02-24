var articleLinksPolitical = [
"under-construction.html",
"under-construction.html",
"under-construction.html",
"under-construction.html"
];

var articleTitlesPolitical = [
"Trump responds to Mueller indictment news",
"Florida lawmakers face political pressure after Parkland shooting",
"Meghan Markle and Prince Harry's romantic date night pets political",
"Mueller files new fraud charges against Paul Manafort and Rick Gates"
];

var articleLinksSeasonal = [
"under-construction.html",
"view-article.html",
"under-construction.html"
]

var articleTitlesSeasonal = [
"Coping with seasonal affective disorder",
"7.2 magnitude earthquake rocks Mexico, 2 killed in chopper crash",
"This season's flu vaccine is only 36 percent effective, but experts say you should still get it"
]

var featuredArticleLinks = [
"https://www.cnn.com/2018/02/17/politics/white-house-responds-mueller/index.html",
"http://abcnews.go.com/International/75-magnitude-earthquake-rocks-mexico/story?id=53154547"
];

var featuredArticleTitles = [
"Trump responds to Mueller indictment news",
"7.2 magnitude earthquake rocks Mexico, 2 killed in chopper crash"
];


var politicalArticle = 0;
var seasonalArticle = 0;
var featuredArticle = 0;

var numPoliticalArticles = 4;
var numSeasonalArticles = 3;
var numFeaturedArticles = 2;

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

function init() {
	document.getElementById("event-title-one").innerHTML = articleTitlesPolitical[politicalArticle].link(articleLinksPolitical[politicalArticle]);
	document.getElementById("event-title-two").innerHTML = articleTitlesSeasonal[seasonalArticle].link(articleLinksSeasonal[seasonalArticle]);
}


function nextArticleFirst() 
{
	politicalArticle = (politicalArticle + 1) % numPoliticalArticles;
	document.getElementById("event-title-one").innerHTML = articleTitlesPolitical[politicalArticle].link(articleLinksPolitical[politicalArticle]);

}

function prevArticleFirst() 
{
	politicalArticle = (politicalArticle + numPoliticalArticles - 1) % numPoliticalArticles;
	document.getElementById("event-title-one").innerHTML = articleTitlesPolitical[politicalArticle].link(articleLinksPolitical[politicalArticle]);
}

function nextArticleSecond()
{
	seasonalArticle = (seasonalArticle + 1) % numSeasonalArticles;
	document.getElementById("event-title-two").innerHTML = articleTitlesSeasonal[seasonalArticle].link(articleLinksSeasonal[seasonalArticle]);
}

function prevArticleSecond()
{
	seasonalArticle = (seasonalArticle + numSeasonalArticles - 1) % numSeasonalArticles;
	document.getElementById("event-title-two").innerHTML = articleTitlesSeasonal[seasonalArticle].link(articleLinksSeasonal[seasonalArticle]);
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

init();

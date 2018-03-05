var articleLinksPolitical = [
"under-construction.html",
"under-construction.html",
"under-construction.html",
"under-construction.html"
];

var articleTitlesPolitical = [
"Trump responds to Mueller indictment news",
"Florida lawmakers face political pressure after Parkland shooting",
"Meghan Markle and Prince Harry's romantic date night gets political",
"Mueller files new fraud charges against Paul Manafort and Rick Gates"
];

var articleBackgroundsPolitical = [
"linear-gradient(to bottom,rgba(255, 255, 255, 0.3) 100%,rgba(255, 255, 255, 0.3) 100%), url(\"trump.jpg\")",
"linear-gradient(to bottom,rgba(255, 255, 255, 0.3) 100%,rgba(255, 255, 255, 0.3) 100%), url(\"florida.jpg\")",
"linear-gradient(to bottom,rgba(255, 255, 255, 0.3) 100%,rgba(255, 255, 255, 0.3) 100%), url(\"meghan.jpg\")",
"linear-gradient(to bottom,rgba(255, 255, 255, 0.3) 100%,rgba(255, 255, 255, 0.3) 100%), url(\"mueller.jpg\")",
];


var articleLinksSeasonal = [
"under-construction.html",
"view-article.html",
"under-construction.html",
"under-construction.html",
];


var articleTitlesSeasonal = [
"Coping with seasonal affective disorder",
"Groundhog Day 2018: Punxsutawney Phil predicts if winter will be longer",
"7.2 magnitude earthquake rocks Mexico, 2 killed in chopper crash",
"16 more children dead from flu; peak still to come, CDC says"
];

var articleBackgroundsSeasonal = [
"linear-gradient(to bottom,rgba(255, 255, 255, 0.3) 100%,rgba(255, 255, 255, 0.3) 100%), url(\"affective_disorder.jpg\")",
"linear-gradient(to bottom,rgba(255, 255, 255, 0.3) 100%,rgba(255, 255, 255, 0.3) 100%), url(\"groundhog.jpg\")",
"linear-gradient(to bottom,rgba(255, 255, 255, 0.3) 100%,rgba(255, 255, 255, 0.3) 100%), url(\"mexico.jpg\")",
"linear-gradient(to bottom,rgba(255, 255, 255, 0.3) 100%,rgba(255, 255, 255, 0.3) 100%), url(\"flu.jpg\")",
];

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
var numSeasonalArticles = 4;
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
	
	$("#comment-textarea").on('input', function() {
		$(this).css('height', 'auto');
		var sh = $(this)[0].scrollHeight;
		$(this).css('height', sh + 'px');

		var inputStr = $(this).val();
		if (inputStr.length > 3) {
			//$("#submit-comment").css("opacity", "1.0");
			$('#submit-comment').removeClass("submit-comment-button-nohover");
			$("#submit-comment").addClass("submit-comment-button");
			$("#submit-comment").prop("disabled", false);
		}
		else {
			$("#submit-comment").removeClass("submit-comment-button");
			$("#submit-comment").addClass("submit-comment-button-nohover");
			$("#submit-comment").prop("disabled", true);
		}
	});

	$("#comment-textarea").click(function() {

		var inputStr = $(this).val();
		if (inputStr.length > 3) {
			//$("#submit-comment").css("opacity", "1.0");
			$('#submit-comment').removeClass("submit-comment-button-nohover");
			$("#submit-comment").addClass("submit-comment-button");
			$("#submit-comment").prop("disabled", false);
		}
		else {
			$("#submit-comment").removeClass("submit-comment-button");
			$("#submit-comment").addClass("submit-comment-button-nohover");
			$("#submit-comment").prop("disabled", true);
		}

		$(".comment-buttons").show();
		$(".comment-header").css('height', 'auto');

	});

	$("#cancel-comment").click(function() {
		$(".comment-buttons").hide();
		$("#comment-textarea").val('');
		$("#comment-textarea").css('height', 'auto');
		$(".comment-header").css('height', '150px');
	});

	$("#submit-comment").click(function() {
		// get user input
		var content = $("#comment-textarea").val();
		content = content.replace(/\r?\n/g, '<br />');
		
		$(".comment-buttons").hide();
		$("#comment-textarea").val('');
		$("#comment-textarea").css('height', 'auto');
		$(".comment-header").css('height', '150px');

		// get date and time
		var today = new Date();
		var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
		var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
		var dateTime = date+' '+time;

		// append on top
		var userComment = '<div class="posted-comments">' +
      					'<a href="profile.html"><img class="thumbnail" src="thumbnail_car.jpg"></a>' +
      					'<div class="post">' + 
      					'<div class="post-info"><a class="post-user-name" href="#">' +
      					'Jane Doe' + 
      					'</a><span class="post-time">' +
      					dateTime + 
      					'</span></div>' +
      					'<div class="post-content">' +
      					content +
      					'</div></div></div>';

		$("#comment-body").prepend(userComment);

		// update number of comments
		numComments = $("#num-comments").html();
		$("#num-comments").html(parseInt(numComments) + 1);
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
	document.getElementById("event-politics").style.backgroundImage = articleBackgroundsPolitical[politicalArticle];
}

function prevArticleFirst() 
{
	politicalArticle = (politicalArticle + numPoliticalArticles - 1) % numPoliticalArticles;
	document.getElementById("event-title-one").innerHTML = articleTitlesPolitical[politicalArticle].link(articleLinksPolitical[politicalArticle]);
	document.getElementById("event-politics").style.backgroundImage = articleBackgroundsPolitical[politicalArticle];
}

function nextArticleSecond()
{
	seasonalArticle = (seasonalArticle + 1) % numSeasonalArticles;
	document.getElementById("event-title-two").innerHTML = articleTitlesSeasonal[seasonalArticle].link(articleLinksSeasonal[seasonalArticle]);
	document.getElementById("event-seasonal").style.backgroundImage = articleBackgroundsSeasonal[seasonalArticle];
}

function prevArticleSecond()
{
	seasonalArticle = (seasonalArticle + numSeasonalArticles - 1) % numSeasonalArticles;
	document.getElementById("event-title-two").innerHTML = articleTitlesSeasonal[seasonalArticle].link(articleLinksSeasonal[seasonalArticle]);
	document.getElementById("event-seasonal").style.backgroundImage = articleBackgroundsSeasonal[seasonalArticle];
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

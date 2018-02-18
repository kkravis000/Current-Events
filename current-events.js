
/*
Global variables.
*/

let firstname = [];
let lastname = [];
let email = [];
let username = [];
let password = [];

$(document).ready(function() {
	$(".interest-tag-wrapper").click(function() {
		if ($(this).find('img').css('opacity') == '0.4') {
			$(this).find('img').css('opacity', '1.0');
		}
		else {
			$(this).find('img').css('opacity', '0.4');
		}
	});

	$("#sign-up-done").click(function() {
		var n = firstname.length;
		firstname[n] = $("#first-name-field").val();
		lastname[n] = $("#last-name-field").val();
		email[n] = $("#email-field").val();
		password[n] = $("#password-field").val();
	});

});

/**
function NewUser() {
	document.getElementById("done1").onclick = function(){
	//get the value in each text box and add to user arrays
	firstname[n] = document.getElementById("first-name-field").val();
	lastname[n] = document.getElementById("last-name-field").val();
	email[n] = document.getElementById("email-field").val();
	username[n] = document.getElementById("username-field").val();
	password[n] = document.getElementById("password-field").val();
}
}

**/
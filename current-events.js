let n = 0;
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

});

function NewUser() {
	document.getElementById("done1").onclick = function(){
  //get the value in each text box and add to user arrays
  firstname[n] = document.getElementById("first-name-field").value;
	lastname[n] = document.getElementById("last-name-field").value;
	email[n] = document.getElementById("email-field").value;
	username[n] = document.getElementById("username-field").value;
	password[n] = document.getElementById("password-field").value;
	n = n + 1
}
}

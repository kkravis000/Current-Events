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

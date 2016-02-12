$(document).ready(function(){
	var visina = window.innerHeight;
	var marginTop = visina*0.187;
	var sirina = window.innerWidth;
	var marginLeft = sirina*0.020;

	// Pozicioniranje menija, glede na velikost okna

	$(".navigation").css("margin-top", marginTop);
	$(".navigation").css("margin-left", marginLeft);


	//Prikazovanje in skrivanje opisa

	$(".profil a").click(function(){
		if($(".izdelki p").css('display') == "block"){
			$(".izdelki p").slideToggle(400, function(){
				$(".profil p").slideToggle(400);
			});
		} else if ($(".nacin p").css('display') == "block"){
			$(".nacin p").slideToggle(400, function(){
				$(".profil p").slideToggle(400);
			});
		} else if ($(".kontakt p").css('display') == "block"){
			$(".kontakt p").slideToggle(400, function(){
				$(".profil p").slideToggle(400);
			});
		} else {
			$(".profil p").slideToggle(400);
		}
	});
	$(".nacin a").click(function(){
		if($(".izdelki p").css('display') == "block"){
			$(".izdelki p").slideToggle(400, function(){
				$(".nacin p").slideToggle(400);
			});
		} else if ($(".profil p").css('display') == "block"){
			$(".profil p").slideToggle(400, function(){
				$(".nacin p").slideToggle(400);
			});
		} else if ($(".kontakt p").css('display') == "block"){
			$(".kontakt p").slideToggle(400, function(){
				$(".nacin p").slideToggle(400);
			});
		} else {
			$(".nacin p").slideToggle(400);
		}
	});
	$(".izdelki a").click(function(){
		if($(".nacin p").css('display') == "block"){
			$(".nacin p").slideToggle(400, function(){
				$(".izdelki p").slideToggle(400);
			});
		} else if ($(".profil p").css('display') == "block"){
			$(".profil p").slideToggle(400, function(){
				$(".izdelki p").slideToggle(400);
			});
		} else if ($(".kontakt p").css('display') == "block"){
			$(".kontakt p").slideToggle(400, function(){
				$(".izdelki p").slideToggle(400);
			});
		} else {
			$(".izdelki p").slideToggle(400);
		}
	});
	$(".kontakt a").click(function(){
		if($(".izdelki p").css('display') == "block"){
			$(".izdelki p").slideToggle(400, function(){
				$(".kontakt p").slideToggle(400);
			});
		} else if ($(".profil p").css('display') == "block"){
			$(".profil p").slideToggle(400, function(){
				$(".kontakt p").slideToggle(400);
			});
		} else if ($(".nacin p").css('display') == "block"){
			$(".nacin p").slideToggle(400, function(){
				$(".kontakt p").slideToggle(400);
			});
		} else {
			$(".kontakt p").slideToggle(400);
		}
	});
});
$(window).resize(function(){
	var visina = window.innerHeight;
	var marginTop = visina*0.187;
	var sirina = window.innerWidth;
	var marginLeft = sirina*0.020;

	// Pozicioniranje menija, glede na velikost okna

	$(".navigation").css("margin-top", marginTop);
	$(".navigation").css("margin-left", marginLeft);
});
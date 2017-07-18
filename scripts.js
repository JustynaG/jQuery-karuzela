$(function() { 

	var carouselList = $("#carousel ul");
	var firstItem = carouselList.find("li:first");
	var lastItem = carouselList.find("li:last");
	

	setInterval(function() {
		carouselList.animate({'marginLeft': '-400px'}, 2000, function() {

			lastItem.after(firstItem); 
			carouselList.css({marginLeft:0});
		});
	});
});



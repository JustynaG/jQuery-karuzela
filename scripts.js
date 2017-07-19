$(function() { 

	var carouselList = $("#carousel ul");
	var pause = 3000;
	
	setInterval(function() {
		carouselList.animate({'marginLeft': '-400px'}, 1000, function() {

			var firstItem = carouselList.find("li:first");
			var lastItem = carouselList.find("li:last");

			lastItem.after(firstItem); 
			carouselList.css({marginLeft:0});
		});
	}, pause);
});



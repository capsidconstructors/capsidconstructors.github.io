$(document).ready(function () {
	
//Identify placeholder for navbar 
var $nav = $('#nav-placeholder');

//Request navbar html and insert into placeholder
$nav.load('/navigation.html');

//Set active navbar link based on page location	
var path = window.location.pathname;	
var pathsplit = path.split('/');	
var root = pathsplit[1];

//Format root to match href attributes in navbar
root = "/" + root;

if (!root.endsWith(".html")) {
	root = root + ".html";
}

//Remove active class from previously active links
$('a.active').removeClass('active');
	
//Add active class to appropriate link
var $target = $('a[href="'+root+'"]');

$target.addClass('active');

//Smooth scrolling for page jumps
$('.scroll').click(function (e) {
	e.preventDefault();
	$('body,html').animate({scrollTop: $(this.hash).offset().top - 105}, 500);
});
	
//Active link scrolling in sidenav
$(window).scroll(function() {
	
	//Find scroll bar location
	var scrollbarLocation = $(this).scrollTop();
	
	//Find location of each scroll point
	$('.scroll').each(function() {
		var offset = $(this.hash).offset().top;
			
		//If scrollbar passes scroll point, accounting for padding
		if ( offset - 106 <= scrollbarLocation ) {
			//Remove active class from already active links
			$('.scroll.active').removeClass('active');
			//Add active class to newly activated link
			$(this).addClass('active');	
		}
		
	})
})

//Interactive table/plot thing
	
$('td#sol1').hover(function() {
		$('.plotholder').css("background-image", "url('/images/modellingsol1.png')", "background-size", "contain");
	})
	
	.mouseleave(function() {
		$('.plotholder').css("background-image", "none");
	});
	
	$('td#sol2').hover(function() {
		$('.plotholder').css("background-image", "url('/images/modellingsol2.png')", "background-size", "contain");
	})
	
	.mouseleave(function() {
		$('.plotholder').css("background-image", "none");
	});
	
	$('td#sol3').hover(function() {
		$('.plotholder').css("background-image", "url('/images/modellingsol3.png')", "background-size", "contain");
	})
	
	.mouseleave(function() {
		$('.plotholder').css("background-image", "none");
	});
	
	$('td#sol4').hover(function() {
		$('.plotholder').css("background-image", "url('/images/modellingsol4.png')", "background-size", "contain");
	})
	
	.mouseleave(function() {
		$('.plotholder').css("background-image", "none");
	});
	
$('.toggle').click(function() {
	$(this).next().toggle(1000);
})
	
});






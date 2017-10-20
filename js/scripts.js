var $doc = $(document);
var $nav = $('#nav-placeholder');

//Navbar loading
$doc.ready(() => {
	$.get( 'navigation.html', function ( data ) {
				$nav.html( data );
			});
});




$(document).ready(function() { 
	$('#loginForm').submit(function( event ) {

		// Stop form from submitting normally
		event.preventDefault();

		// Get some values from elements on the page:
		var $form = $( this ),
		    url = $form.attr( "action" );

		var stringData = $('#loginForm').serialize()

		// Send the data using post
 		var posting = $.post( url, stringData );

 		posting.done( function(data) {
 			console.log(data);
 			if (data.tipo == 0) {
				window.location.href = '/login.html';
			}
			else {
				window.location.href = '/index.html';
			}
 		});
	});
});
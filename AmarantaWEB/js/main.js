$(document).ready(function(){
	console.log('its working !');

	$(document).ready(function () {
		$('.carousel').carousel({
			interval: 9000
		});

		$('.carousel').carousel('cycle');
	});
})


$(document).ready(function(){
	let currentPos = 0;
	const listItems = $('#dynamicList li');
	const listLength = listItems.length;

	
	$('#arrowUp').hide();

	
	listItems.slice(1).hide();

	
	$('#arrowDown').click(function(){
		if (currentPos < listLength - 1) {
			currentPos++;
			listItems.eq(currentPos).show();
			$('#arrowUp').show();
		}
		if (currentPos === listLength - 1) {
			$('#arrowDown').hide();
		}
	});

	// Obsługa naciśnięcia strzałki w górę
	$('#arrowUp').click(function(){
		if (currentPos > 0) {
			listItems.eq(currentPos).hide();
			currentPos--;
			$('#arrowDown').show();
		}
		if (currentPos === 0) {
			$('#arrowUp').hide();
		}
	});
});
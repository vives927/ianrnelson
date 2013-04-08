$(document).ready(function() {
	accordion($('div.faqPage'));
});

function accordion($el) {
	$el.find('div.accGroup').each(function() {
		var $trigger = $(this).find('div.accHead'),
			$content = $(this).find('div.accBody'),
			$arrow = $(this).find('span.arrow'),
			isOpen = false;

		$trigger.click(function() {
			if(!isOpen) {
				$content.slideDown();
				isOpen = true;
				$arrow.html('&#x25B2;');
			} else {
				$content.slideUp();
				isOpen = false;
				$arrow.html('&#x25BC;');
			}
		});
	});
}
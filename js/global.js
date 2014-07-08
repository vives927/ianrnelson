function bulletNav($el) {
	"use strict";
	var $item = $el.find('ul.videoList').children('li'),
        $bulletsBox = $el.find('div.videoNav'),
		$bullets,
		bulletHtml = '<ul><li class="active">',
        fadeSpeed = 600,
		current = 0,
		active = false,
		queue = null,
		x;

	function animTo(num) {
		if (num !== current && !active) {
			active = true;
			$bullets.eq(current).removeClass('active');
			$bullets.eq(num).addClass('active');
			var height = $el.height();
			$el.css({ height: height });
			$item.eq(current).fadeOut(fadeSpeed, function () {
				$item.eq(num).fadeIn(fadeSpeed, function () {
					$el.css('height', '');
					current = num;
					active = false;
					if (queue !== null) {
						animTo(queue);
						queue = null;
					}
				});
			});
		} else {
			queue = num;
		}
	}

	function moveNext() {
		var num = current + 1;
		if (num >= $item.length) {
			num = 0;
		}
		animTo(num);
	}

	if ($item.length < 2) {
		return;
	}
	for (x = 0; x < $item.length - 1; x = x + 1) {
		bulletHtml += '<li>';
	}
	bulletHtml += '</ul>';
	$bulletsBox.append(bulletHtml);
	$bullets = $el.find('div.videoNav li');
	$bullets.each(function (i) {
		$(this).click(function () {
			animTo(i);
		});
	});
}


$(document).ready(function() {
	bulletNav($('div.video'));
	$('a.link_tooltip').tooltip();
	$('a.link_tooltip').click(function(e) {
		e.preventDefault();
	});
	$('div.faqInner').perfectScrollbar();
});
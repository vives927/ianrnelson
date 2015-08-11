(function ($) {
    'use strict';

    $('a.link_tooltip').tooltip();
    $('a.link_tooltip').click(function(e) {
        e.preventDefault();
    });

}(jQuery));
(function ($) {
    'use strict';

    var $toggle = $('#InsurancePlansToggle');
    var $list = $('#InsurancePlansList');

    $toggle.click(function () {
        $list.toggleClass('is-open');
    });

}(jQuery));
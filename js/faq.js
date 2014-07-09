$(document).ready(function() {
    $('div.faqInner').perfectScrollbar();
    $('a.link_tooltip').tooltip();
    $('a.link_tooltip').click(function(e) {
        e.preventDefault();
    });
});
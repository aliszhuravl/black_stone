$(document).ready(function() {
    var scrolled;
    window.onscroll = function () {
        scrolled = window.pageYOffset || document.documentElement.scrollTop;
        if (scrolled > 80) {
            $(".panel").addClass('panel_open')
        }
        if (120 > scrolled) {
            $(".panel").removeClass('panel_open')
        }
    };

    $('.open_search').on('click', function () {
        $('.panel_search').addClass('ps_opened');
    });

    $('.close_search').on('click', function () {
        $('.panel_search').removeClass('ps_opened');
    });
});


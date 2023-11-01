(function($) {
    $('#filters').on('click', function () {
        $('body').addClass('stopped');
        $('.filters_opener').addClass('filters_opened');
    });

    $('#f_close').on('click', function () {
        $('body').removeClass('stopped');
        $('.filters_opener').removeClass('filters_opened');
    });
})(jQuery);
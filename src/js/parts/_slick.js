$(document).ready(function() {

    $('.slider_main').slick({
        dots: false,
        infinite: true,
        cssEase:'linear',
        slidesToShow: 4,
        arrows: true,
        responsive: [
            {
                breakpoint: 2000,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.left__slider').slick({
        dots: false,
        infinite: true,
        cssEase:'linear',
        slidesToShow:1,
        arrows: true
    });

    $('.extras_slider').slick({
        dots: false,
        infinite: true,
        cssEase:'linear',
        slidesToShow: 4,
        arrows: true,
        prevArrow: $('#btn_prev_p'),
        nextArrow: $('#btn_next_p'),
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.similar_slider').slick({
        dots: false,
        infinite: true,
        cssEase:'linear',
        slidesToShow: 4,
        arrows: true,
        prevArrow: $('#btn_prev_s'),
        nextArrow: $('#btn_next_s'),
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});
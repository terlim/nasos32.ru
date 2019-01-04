//= ../../node_modules/jquery/dist/jquery.js
//= ../../node_modules/popper.js/dist/umd/popper.js

//= ../../node_modules/bootstrap/dist/js/bootstrap.min.js
//= ../../node_modules/swiper/dist/js/swiper.min.js

$(document).ready(function () {
    var mySwiper = new Swiper ('#swiper-promo', {
        // Disable preloading of all images
        preloadImages: false,
        // Enable lazy loading
        lazy: {
            loadPrevNext: true,
        },
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        grabCursor: true,
        effect: 'slide',
        speed: 1000,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        autoplay: {
            delay: 4000,
        },

        // Default parameters
        slidesPerView: 1,
        spaceBetween: 0,
        loadPrevNextAmount: 2,

    });
});
$(function () {
    'use strict'

    $('[data-toggle="offcanvas"]').on('click', function () {
        $('.offcanvas-collapse').toggleClass('open')
        $('.icon-bar--wrapper').toggleClass('open')
    })
})
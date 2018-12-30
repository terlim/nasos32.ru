//= ../../node_modules/jquery/dist/jquery.js
//= ../../node_modules/popper.js/dist/umd/popper.js

//= ../../node_modules/bootstrap/dist/js/bootstrap.min.js

$(function () {
    'use strict'

    $('[data-toggle="offcanvas"]').on('click', function () {
        $('.offcanvas-collapse').toggleClass('open')
        $('.icon-bar--wrapper').toggleClass('open')
    })
})
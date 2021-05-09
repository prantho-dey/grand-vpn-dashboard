(function ($) {

    'use strict';

    /*------------------------------------
        Mobile Menu
    --------------------------------------*/

    $(".header-toggle-btn").on("click", function (e) {
        e.preventDefault();
        $('.body-overlay').toggleClass('active');
        $(".header-extra").toggleClass("active");
    });

    $(".sidebar-toggle-btn").on("click", function (e) {
        e.preventDefault();
        $('.body-overlay').toggleClass('active');
        $(".sidebar-left").toggleClass("active");
    });

    $(".notification-toggle-btn").on("click", function (e) {
        e.preventDefault();
        $('.body-overlay').toggleClass('active');
        $(".sidebar-right").toggleClass("active");
    });

    $(".body-overlay").on("click", function (e) {
        e.preventDefault();
        $(this).removeClass('active');
        $(".header-extra").removeClass("active");
        $(".sidebar-left").removeClass("active");
        $(".sidebar-right").removeClass("active");
    });

    /*-------------------------------------------
        Sticky Header
    --------------------------------------------- */

    let win = $(window);
    let sticky_id = $(".header-area");
    win.on('scroll', function () {
        let scroll = win.scrollTop();
        if (scroll < 245) {
            sticky_id.removeClass("sticky-header");
        } else {
            sticky_id.addClass("sticky-header");
        }
    });


    /*------------------------------------
        Overlay Close
    --------------------------------------*/
    $(window).scroll(function () {
        if ($(this).scrollTop() !== 0) {
            $('#scrollUp').fadeIn();
        } else {
            $('#scrollUp').fadeOut();
        }
    });

    $('#scrollUp').on('click', function () {
        $("html, body").animate({scrollTop: 0}, 600);
        return false;
    });

    /*------------------------------------
        Data-Background
    --------------------------------------*/
    $("[data-background]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    });

    $("[data-bg-color]").each(function () {
        $(this).css("background", $(this).attr("data-bg-color"))
    });

    $('.view-password').on('click', function () {
        let input = $(this).parent().find(".pass");
        input.attr('type', input.attr('type') === 'password' ? 'text' : 'password');
    });
    $('.currect-text').keypress(function() {
        $('.g-account-form .input-check-circle').addClass('hidden-form-btn');
    })

    // cookies
    win.on('load',function() {
        $('.cookies-wrapper').addClass('popup-shown');
    })
    $('.g-popup-closed').on('click',function() {
        $('.cookies-wrapper').removeClass('popup-shown');
    })

    $('.selectpicker').selectpicker();
    // support popup on click
    $('.support-box-inner').hide();
    $('.support-btn,.support-close-btn button').on('click',function() {
        $('.support-box-inner').slideToggle();
    })
})(jQuery);

$(document).ready(function(){

    new WOW().init();

    $(".offer__content .offer__content_btn a").click(function(e) {
        e.preventDefault();
        const btnClassName = this.className;
        $(".offer__content .offer__content_btn a").removeClass('active');
        $(this).addClass('active');
        $(".offer__content_text ul").removeClass('active');
        $("."+ btnClassName +" ul").addClass('active');
    });

    $('.close_navbar').on('click', function(){
        $('.active__menu').fadeOut();
    });

    $('.hamburger').click(function (e) {
        e.preventDefault();
        $('.hamburger span').toggleClass('toggle-black');
    });

    $('.hamburger').on('click', function(e) {
        e.preventDefault;
        $(this).toggleClass('hamburger_active');
        return;
    });

    $('.hamburger').click(function(){
        if ($(".active__menu").is(":visible") == true) {
            $('.active__menu').hide();
            $('.header').removeClass("slick_active")
        } else {
            $('.active__menu').show();
            $(".header").addClass("slick_active")
        }
    });

    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation').fadeOut('slow')
    });
    $('input[name=phone').mask("+7 (999) 999-99-99");

});

$(window).scroll(function(){
    var elemScrollTop = $(window).scrollTop();
    var blockHeight = $('.header').height() + $('.main, .main2').height();

    if (! $('.active__menu').is(':visible')) {
        if (elemScrollTop >= (blockHeight / 2) ) {
            $('.header').addClass('slick');
        } else {
            $('.header').removeClass('slick');
        }
    }
});

$('.a2 a').click(function () {
    $(".hamburger").toggleClass('hamburger_active');
    $('.header').removeClass("slick_active")
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 1500);
    return false;
});

$('.a1 a').click(function () {
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 1500);
    return false;
});
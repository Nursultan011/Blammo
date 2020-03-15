$(document).ready(function(){

    new WOW().init();

    $(".stages__content li").click(function(e) {
        e.preventDefault();
        $('.stages__content li').removeClass('active');
        $(this).addClass('active');
        var stage_id = $('.stages__content li.active a').attr('id');
        $('.stages__content_text').removeClass('active');
        $('#stage_' + stage_id).addClass('active');
    });

    $('.close_navbar').on('click', function(){
        $('.active__menu').fadeOut();
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

    $('input[name=phone').mask("+7 (999) 999-99-99");

});

$(window).scroll(function(){
    var elemScrollTop = $(window).scrollTop();
    var blockHeight = $('.header').height() + $('.main').height();

    if (! $('.active__menu').is(':visible')) {
        if (elemScrollTop >= (blockHeight / 1) ) {
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
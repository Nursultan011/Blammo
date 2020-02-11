$(document).ready(function(){
    $(".offer__content .offer__content_btn a").click(function(e) {
        e.preventDefault();
        const btnClassName = this.className;
        $(".offer__content .offer__content_btn a").removeClass('active');
        $(this).addClass('active');
        $(".offer__content_text ul").removeClass('active');
        $("."+ btnClassName +" ul").addClass('active');
    });

    $(".stages__content li").click(function(e) {
        e.preventDefault();
        $('.stages__content li').removeClass('active');
        $(this).addClass('active');
        var stage_id = $('.stages__content li.active a').attr('id');
        $('.stages__content_text').removeClass('active');
        $('#stage_' + stage_id).addClass('active');
    });

    $(".hamburger").click(function (e) {
        e.preventDefault();
        $('.active__menu').fadeIn();
    });

    $(".close-btn").click(function (e) {
        e.preventDefault();
        $('.active__menu').fadeOut();
    });

    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation').fadeOut('slow')
    });
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

$('a').click(function () {
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 1500);
    return false;
});
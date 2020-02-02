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
});





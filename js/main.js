
$(function (){
    baguetteBox.run('.gallery', {
        animation: 'fadeIn',
        noScrollbars: true
    });

    $(window).scroll(function( ){
        if ($(this).scrollTop() > 600) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    $('.scrollToTop').click(function() {
        $('html, body').animate({scrollTop : 0}, 800);
        return false;

    })
});
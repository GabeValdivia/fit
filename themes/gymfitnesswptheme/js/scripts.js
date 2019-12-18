jQuery(document).ready(function($){
    //Make the menu responsive
    $('#menu-main-navigation').slicknav({
        //appendTo : '.site-header'
    });

    //Run the bxSlider on Testimonials
    $('.testimonials-list').bxSlider({
        controls: true,
        mode: 'fade',
        keyboardEnabled: true,
        ariaLive: true
    });

});
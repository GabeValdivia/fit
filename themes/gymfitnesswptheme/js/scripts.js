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

    // When page is ready add fixed menu if position is > than 300px
    const headerScroll = document.querySelector('.navigation-bar');
    const rect = headerScroll.getBoundingClientRect();
    const topDistance = Math.abs(rect.top);
    fixedMenu(topDistance);
});

window.onscroll = () => {
    const scroll = window.scrollY;
    
    fixedMenu(scroll);
}

// Adds a fixed menu on top
function fixedMenu(scroll) {
    const headerScroll = document.querySelector('.navigation-bar');

    // In case the scroll is greater than 300 add some classes
    if(scroll > 300) {
        headerScroll.classList.add('fixed-top');
    } else {
        headerScroll.classList.remove('fixed-top');
    }
}
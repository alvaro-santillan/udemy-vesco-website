/*==================================================================
                        SERVICES
==================================================================*/
$(function() {
    // animate on scroll
    new WOW().init();
});

/*==================================================================
                        WORK
==================================================================*/
$(function() {
    // bug lower case function
    // bug "(function)(){" should be (function(){
    $("#work") .magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image', // , to turn include gallery
        gallery: 
        { enabled: true}
    });
});

/*==================================================================
                        TEAM
==================================================================*/
$(function() {
    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,        
        // responsive code copied from owl carousel documintation
        responsive: {            
            // breakpoint from 0 up
            0: {items: 1},
            // breakpoint from 480 up
            480: {items: 2},
            // breakpoint from 768 up
            768: {items: 3},            
        }        
    });
});

/*==================================================================
                        TESTIMONIALS
==================================================================*/
$(function() {   
    $("#customers-testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
    });  
});

/*==================================================================
                        STATS
==================================================================*/
$(function() {    
    $('.counter').counterUp({
        delay: 10, 
        time: 2000
    });    
});

/*==================================================================
                        CLIENTS
==================================================================*/
$(function() {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,        
        // responsive code copied from owl carousel documintation
        responsive: {            
            // breakpoint from 0 up
            0: {items: 1},
            // breakpoint from 480 up
            480: {items: 3},
            // breakpoint from 768 up
            768: {items: 5},            
            // breakpoint from 992 up
            992: {items: 6}           
        }        
    });
});

/*==================================================================
                        NAVIGATION
==================================================================*/
$(function() {
// show/hide the navigation bar    
    $(window).scroll(function() {                     
        if  ($(this).scrollTop() < 50) {
            // hide the nav bar
            $("nav").removeClass("vesco-top-nav");
            $("#back-to-top").fadeOut();            
        } else {
            // show the nav bar
            $("nav").addClass("vesco-top-nav");
            $("#back-to-top").fadeIn();
        }        
    });    
});
// close mobile menu on click
$(function() {    
    $(".navbar-collapse ul li a").on("click touch", function() {        
        $(".navbar-toggle").click();        
    })    
});

/*==================================================================
                        SMOOTH SCROLLING
==================================================================*/
$(function() {    
    $("a.smooth-scroll").click(function(event){        
        event.preventDefault();        
        // get/return id like #about etc
        var section = $(this).attr("href");        
        $('html, body').animate({            
            scrollTop: $(section).offset().top -64            
        }, 1250, "easeInOutExpo"); // 1.25 secound animation        
    });    
}); /* 128 lines down from 219 lines 41.6% line reduction */
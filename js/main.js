$(document).ready(function(){
    $('.right-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });

    $('.header-button button').click(function(){
        $('body').toggleClass('night-mood');
        $('.header-logo img').toggleClass('dark-mode-logo');
    });

    $('aside nav').meanmenu({
        meanScreenWidth:"767",
        meanMenuContainer: ".responsive-nav"
    });



        $('.search-icon').click(function () {
            $(".header-form form").toggleClass('search-bar');


        });

    $('.meanmenu-reveal').click(function () {
        $(".meanmenu-reveal").toggleClass('cross-icon');


    });



})


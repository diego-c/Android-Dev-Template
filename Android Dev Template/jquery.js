$(document).ready(function() {

    //$('.submenu').hide();
    $('nav .nav-large .share-large').hide();
    $('#slide2').hide();
    $('#slide3').hide();
    $('nav .submenu').hide();
    $('nav .menu-button').css('cursor', 'pointer');
    $('nav #home').css('cursor', 'pointer');
    $('.share-txt').css('cursor', 'pointer');
    $('body > div > div:nth-child(1) > div > nav > ul.nav-large > li:nth-child(6)').css('cursor','pointer');


    // MENU SLIDE

    $('nav .menu-button').on('click', function() {

        $('nav li .submenu').slideToggle();

    });

    //FOR LARGE SCREENS: SHARE SLIDE

    $('nav .nav-large .share-txt').on('click', function() {
        $('nav .nav-large .share-large').slideToggle();

    });

    // Experiment

    //$('.right').on('click', function () {
    //var currentSlide = 'slide1';
    // if (currentSlide === 'slide1') {
    // $('#slide1').hide();
    // $('#slide2').show();
    //};


    // NEWS SLIDE

    $('.right1').on('click', function() {

        $('#slide1').slideToggle('slow');
        $('#slide2').slideToggle('slow');

    });
    $('.right2').on('click', function() {

        $('#slide2').slideToggle('slow');
        $('#slide3').slideToggle('slow');

    });
    $('.right3').on('click', function() {

        $('#slide3').slideToggle('slow');
        $('#slide1').slideToggle('slow');

    });
    $('.left1').on('click', function() {

        $('#slide1').slideToggle('slow');
        $('#slide3').slideToggle('slow');

    });
    $('.left2').on('click', function() {

        $('#slide2').slideToggle('slow');
        $('#slide1').slideToggle('slow');

    });
    $('.left3').on('click', function() {

        $('#slide3').slideToggle('slow');
        $('#slide2').slideToggle('slow');

    });
});




//});

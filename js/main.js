$(function () {
    // $('.menu-btn').on('click', function () {
    //     $('.left-menu').slideToggle();
    // });
    $('.menu-btn').on('click', function () {
        $('.left-menu').addClass('left-menu--active');
    });

    $('.close-btn').on('click', function () {
        // $('.left-menu').slideToggle();
        $('.left-menu').removeClass('left-menu--active');
    });


    window.addEventListener('scroll', function () {
        if (this.window.pageYOffset > 0) {
            $('.header__inner').addClass("header--active");
        }
        
        if (this.window.pageYOffset == 0) {
            $('.header__inner').removeClass("header--active");
        }
    });

    // $('.team-slider').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: false,
    //     fade: true,
    //     adaptiveHeight: true,

    // });

    // $('.team-img-slider').slick({
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     asNavFor: '.team-slider',
    //     arrows: true,
    //     centerMode: true,
    //     adaptiveHeight: true,
    //     focusOnSelect: true
    // });



});
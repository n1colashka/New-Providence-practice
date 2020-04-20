$(function () {

    $('.menu-btn').on('click', function () {
        $('.left-menu').addClass('left-menu--active');
    });

    $('.close-btn').on('click', function () {

        $('.left-menu').removeClass('left-menu--active');
    });

    


    $('.plans__selector-items').on('click', function () {


        this.classList.toggle('selector--active');
        $('.plans__items').toggleClass('items--active');

        $('.plans__items').toggleClass('animated fadeIn slow');
        


    });



    window.addEventListener('scroll', function () {
        if (this.window.pageYOffset > 0) {
            $('.header__inner').addClass("header--active");
        }

        if (this.window.pageYOffset == 0) {
            $('.header__inner').removeClass("header--active");
        }
    });

    new WOW().init();

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
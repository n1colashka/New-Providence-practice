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

    // $('.team-img-slider__img.active').on('click', function () {
    //     this.classList.toggle('active');
    //     $('.team-slider__item.active').toggleClass('active');
    // });

    // $('.team-img-slider__img.next').on('click', function () {
    //     this.classList.toggle('next');
    //     this.classList.toggle('active');
    //     $('.team-img-slider__img.active').toggleClass('active');

    //     $('.team-slider__item.next').toggleClass('next');
    // });

    // $('.team-img-slider__img.prev').on('click', function () {
    //     this.classList.toggle('prev');
    //     this.classList.toggle('active');
    //     $('.team-slider__item.prev').toggleClass('prev');
        
    //     $('.team-img-slider__img.active').toggleClass('active');
    // });









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
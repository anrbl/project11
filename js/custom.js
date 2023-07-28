$(function () {

    $('.header .user_area i').on('click', function (e) {
        $('.user_nav').toggleClass('on')
        $('.user_area i').toggleClass('on')
    })

    $('.__fullpage').fullpage({
        anchors: ['main', 'sec1', 'sec2', 'sec3', 'footer'],
        scrollingSpeed: 700,
        scrollHorizontally: true,

        navigation: false,
        css3: false,
        responsiveWidth: 700,
        responsiveHeight: 800,
        scrollOverflow: true,
        afterLoad: function (lnk, idx) {
            $('.side_nav li').eq(idx - 1).addClass('on').siblings().removeClass('on');
        },
        onLeave: function (idx, nidx, dir) {
            console.log(idx, nidx, dir);
            if (nidx == '1') {
                $('.header').removeClass('on')
                $('.side_scroll').removeClass('on')
                $('.side_nav').removeClass('on')
            } else if (nidx == '2') {
                $('.header').addClass('on')
                $('.side_scroll').addClass('on')
                $('.side_nav').addClass('on')
            } else if (nidx == '3') {
                $('.header').removeClass('on')
                $('.side_scroll').removeClass('on')
                $('.side_nav').addClass('on')
            } else if (nidx == '4') {
                $('.header').addClass('on')
                $('.side_scroll').addClass('on')
                $('.side_nav').addClass('on')
            } else {
                $('.header').addClass('on')
                $('.side_scroll').removeClass('on')
                $('.side_nav').removeClass('on')
            };

            $('.side_nav li').eq(nidx - 1).addClass('on').siblings().removeClass('on');

        },
    });

    // $(window).resize(function () {
    //     if ($(window).width() < 768) {
    //         $.fn.fullpage.destroy('all');
    //     } else {
    //         $.fpActivate();

    //     }
    // })

    const MainSlide = new Swiper('.main_slide', {

        parallax: true,
        speed: 1000,
        loop: true,
        autoplay: {
            delay: 4500,
            disableOnInteraction: false,
        },
        grabCursor: true,
        navigation: {
            nextEl: '.arrows .right',
            prevEl: '.arrows .left',
        }
    });


    const NewsSlide = new Swiper('.news_slide', {
        loop: true,
        spaceBetween: 30,
        effect: "fade",
        navigation: {
            nextEl: '.news_arrow .nright',
            prevEl: '.news_arrow .nleft',
        },
    })


    const MotorSlide = new Swiper('.motor_slide', {

        loop: true,
        slidesPerView: 1,
        grid: {
            rows: 1,
        },
        spaceBetween: 24,
        pagination: {
            el: ".main_motorcycle .dots",
            clickable: true,
        },
        breakpoints: {
            // when window width is >= 768px
            768: {

                loop: false,
                slidesPerView: 3,
                spaceBetween: 30,
                grid: {
                    rows: 2,
                },
            }
        }
    })


    //반응형
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 10 ? $('.header').addClass('mobile_on') : $('.header').removeClass('mobile_on');
    })
    $('.mmenu').on('click', function () {
        $(this).toggleClass('on');
        $('.gnb').toggleClass('on');
    })
    $(window).on('resize', function () {
        $('.mmenu').removeClass('mobile_on');
        $('.gnb').removeClass('mobile_on');
    });
    $('.gnb').on('wheel', function (e) {
        if ($(this).hasClass('on')) {
            e.preventDefault();
        }
    });
});
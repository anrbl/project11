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
        responsiveWidth: 768,
        scrollOverflow: true,
        easing: 'easeInOutCubic',
        easingCss3: 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',

        afterLoad: function (lnk, idx) {
            $('.side_nav li').eq(idx - 1).addClass('on').siblings().removeClass('on');
        },
        onLeave: function (idx, nidx, dir) {
            console.log(idx, nidx, dir);
            if (nidx == '2') {
                $('.header').addClass('on')
                $('.side_nav').removeClass('on')
            } else if (nidx == '1') {
                $('.header').removeClass('on')
                $('.side_nav').addClass('on')
            } else if (nidx == '4') {
                $('.header').addClass('on')
                $('.side_nav').removeClass('on')
            } else if (nidx == '5') {
                $('.header').addClass('on')
                $('.side_nav').addClass('on')
            } else {
                $('.header').removeClass('on')
                $('.side_nav').removeClass('on')
            };

            $('.side_nav li').eq(nidx - 1).addClass('on').siblings().removeClass('on');

        },
    });

    const MainSlide = new Swiper('.main_slide', {
        loop: true,
        autoplay: {
            delay: 4500,
            disableOnInteraction: false,
        },
        grabCursor: true,
        effect: "fade",
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
        slidesPerView: 3,
        grid: {
            rows: 2,
        },
        spaceBetween: 30,
        pagination: {
            el: ".main_motorcycle .dots",
            clickable: true,
        },
    })


});
$(function () {
    $('.__fullpage').fullpage({
        scrollHorizontally: true,
    });


    const MainSlide = new Swiper('.main_slide', {
        loop: true,
        autoplay: {
            delay: 4500,
            disableOnInteraction: false,
        },
        grabCursor: true,
        effect: "creative",
        creativeEffect: {
            prev: {
                translate: ["-20%", 0, -1],
            },
            next: {
                translate: ["100%", 0, 0],
            },
        },
        navigation: {
            nextEl: '.arrows .right',
            prevEl: '.arrows .left',
        },
    });


    const NewsSlide = new Swiper('.snews_slide', {
        loop: true,
        spaceBetween: 30,
        effect: "fade",
        navigation: {
            nextEl: '.news_arrow .nright',
            prevEl: '.news_arrow .nleft',
        },
    })
});
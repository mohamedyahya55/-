// swiper side-bar

var swiper = new Swiper(".slide_wap", {
    pagination: {
    el: ".swiper-pagination",
    dynamicBullests: true,
    clickable: true,
    },
    autoplay:{
        delay:2500,
    },
    loop: true
});



// swiper sale product

var swiper = new Swiper(".sale_sec", {
    // slidesPerView: 5,
    // spaceBetween: 30,
    autoplay:{
        delay:3000,
    },
    navigation:{
        nextEl: ".swiper-button-next" ,
        prevEl: ".swiper-button-prev" ,
    },
    loop: true,
    breakpoints:{
        1600:{
            slidesPerView: 5,
            spaceBetween: 30,
        },
        1000:{
            slidesPerView:4,
            spaceBetween: 30,
        },
        992:{
            slidesPerView: 3,
            spaceBetween: 25,
        },
        780:{
            slidesPerView: 3,
            spaceBetween: 20,
        },
        500:{
            slidesPerView: 2,
            spaceBetween: 15,
        },
        0:{
            slidesPerView: 2,
            spaceBetween: 10,
        },
    },
});




var swiper = new Swiper(".comp_wrap", {
    slidesPerView: 5,
    spaceBetween: 30,
    autoplay:{
        delay:3000,
    },
    navigation:{
        nextEl: ".swiper-button-next" ,
        prevEl: ".swiper-button-prev" ,
    },
    loop: true,
    breakpoints:{
        1600:{
            slidesPerView: 5,
            spaceBetween: 30,
        },
        1000:{
            slidesPerView:4,
            spaceBetween: 30,
        },
        992:{
            slidesPerView: 3,
            spaceBetween: 25,
        },
        780:{
            slidesPerView: 3,
            spaceBetween: 20,
        },
        500:{
            slidesPerView: 2,
            spaceBetween: 15,
        },
        0:{
            slidesPerView: 2,
            spaceBetween: 10,
        },
    },
});
document.addEventListener('DOMContentLoaded', () => {

    // слайдер Swiper
    new Swiper('.hits__slider-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        grabCursor: true,
        slidesPerGroup: 1,
        loop: true,

        breakpoints: {
            375: {
                slidesPerView: 1
            },
            1150: {
                slidesPerView: 4
            }
        }
    }); 
});
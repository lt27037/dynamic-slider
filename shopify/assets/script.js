import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

new Swiper('.Slider', {
  direction: 'horizontal',
  slidesPerView: 'auto',
  spaceBetween: 24,
  activeIndex: 1,
  navigation: {
    nextEl: '.Slider__buttonNext',
    prevEl: '.Slider__buttonPrev',
  }
});

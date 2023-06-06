import Swiper, {
  Navigation,
  EffectFade,
  Pagination,
} from 'swiper';


Swiper.use([Navigation, EffectFade, Pagination]);

const servicesSlider = document.querySelector('.services__slider')

if (servicesSlider) {
  const servicesSliderSwiper = new Swiper(servicesSlider, {
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.services__nav-btn__next',
      prevEl: '.services__nav-btn__prev',
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    pagination: {
      el: '.services__nav-pag',
      type: 'fraction',
      clickable: false,
    },
  });
}

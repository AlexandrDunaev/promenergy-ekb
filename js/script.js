document.addEventListener('DOMContentLoaded', function () {
   document.querySelectorAll('.tabs-nav__btn').forEach(function (tabsBtn) {
      tabsBtn.addEventListener('click', function (event) {
         const path = event.currentTarget.dataset.path

         document.querySelectorAll(".tabs-item").forEach(function (tabContent) {
            tabContent.classList.remove("tabs-item--active")
         })
         document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active')
      })
   })
});

const productsSwiper = new Swiper('.products__swiper', {
   // Optional parameters
   direction: 'horizontal',
   loop: true,

   // If we need pagination
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },

   autoplay: {
      delay: 5000,
      disableOnInteraction: false,
   },

   // Navigation arrows
   navigation: {
      nextEl: '.products__swiper-button-next',
      prevEl: '.products__swiper-button-prev',
   },
});

const trustSwiper = new Swiper('.trust__swiper', {
   // Optional parameters
   direction: 'horizontal',
   loop: true,

   slidesPerView: 4,

   autoplay: {
      delay: 5000,
      disableOnInteraction: false,
   },

   // Navigation arrows
   navigation: {
      nextEl: '.trust__swiper-button-next',
      prevEl: '.trust__swiper-button-prev',
   },
});


const newsSwiper = new Swiper('.news__swiper', {
   // Optional parameters
   direction: 'horizontal',
   loop: true,

   slidesPerView: 4,

   spaceBetween: 25,

   autoplay: {
      delay: 5000,
      disableOnInteraction: false,
   },

   // Navigation arrows
   navigation: {
      nextEl: '.news__swiper-button-next',
      prevEl: '.news__swiper-button-prev',
   },
});
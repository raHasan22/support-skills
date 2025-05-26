// Hero slider
var swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // Responsive breakpoints
    320: {
      slidesPerView: 1.2,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 1.5,
      spaceBetween: 15,
    },
    576: {
      slidesPerView: 1.8,
      spaceBetween: 15,
    },
    640: {
      slidesPerView: 2.2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3.2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 4.2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4.2,
      spaceBetween: 20,
    },
    1190: {
      slidesPerView: 4.2,
      spaceBetween: 25,
    },
    1440: {
      slidesPerView: 7.2,
      spaceBetween: 30,
    },
  },
});
// review slider
var swiper1 = new Swiper(".testi-slider", {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  slidesPerView: 1,
  spaceBetween: 30,
  keyboard: {
    enabled: true,
  },
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //   },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Instructor slider

var swiper2 = new Swiper(".single-testi-slider", {
  spaceBetween: 30,
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: ".swiper-pagination-ins",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 0px (mobile)
    0: {
      slidesPerView: 1,
    },
    // when window width is >= 768px (tablet/laptop)
    768: {
      slidesPerView: 2,
    },
    // when window width is >= 1024px (desktop)
    1024: {
      slidesPerView: 4,
    },
  },
});

// student review
var swiper3 = new Swiper(".StudentReviewSwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000,
  },
});

if (window.innerWidth <= 767) {
  var swiper = new Swiper(".swiper", {
    slidesPerView: 'auto',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    mousewhell: true,
    keyboard: true,
  })
};

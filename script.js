var swiper = new Swiper(".swiper-container", {
  slidesPerView: 2.7,
  spaceBetween: 25,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  allowTouchMove: true,
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //   },
});

let wrapper = document.querySelector(".swiper-wrapper");
//wrapper.style.marginTop = "80px";

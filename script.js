var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 25,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  allowTouchMove: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    bulletActiveClass: "pag-bullet-active",
  },
  breakpoints: {
    376: {
      slidesPerView: 2.7,
      pagination: false,
    },
  },
});

let featuresInfo = [
  {
    title: "Track company-wide progress",
    body:
      "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way down to the samllest details. Never lose sight of the bigger picture again.",
  },
  {
    title: "Advanced built-in reports",
    body:
      "Set internal delivery estimates and track progress toward company goals. Our costumisable dashboard helps you build out the reports you need to keep key stakeholders informed.",
  },
  {
    title: "Everything you need in one place",
    body:
      "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.",
  },
];

let features_section = document.querySelectorAll(".features-list-flex");

if (window.matchMedia("(max-width: 375px)").matches) {
  features_section.forEach((node, index, arr) => {
    let listNumber = node.querySelector(".list-number");
    let featureItemBody = node.querySelector(".list-item-container");
    listNumber.innerHTML = `<div>0${index + 1}</div>
    <h5>${featuresInfo[index].title}</h5>
    `;
    featureItemBody.innerHTML = `<p>${featuresInfo[index].body}</p>`;
  });
}

// get the menu element and add a click event listener to toggle menu
let menu = document.querySelector(".menu");
menu.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Menu clicked!");
});

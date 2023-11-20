"use strict";

// main calroucel
// const slideBox = document.querySelector(".slick-box");
// const slideImg = document.querySelector(".slick-box img");
// const currentInx = 0;
// const totalImg = document.querySelectorAll(".slick-box img").length;
// const carouselWidth = slideImg.clientWidth;
// const prevButton = document.querySelector(".slick-wrap .prev");
// const nextButton = document.querySelector(".slick-wrap .next");
// let autocarouselInterval;

// // 버튼 작동 함수
// const initializeCarousel = () => {
//   prevButton.disabled = false;
//   nextButton.disabled = false;
// };

// //
// const rotateCarousel = (direction) => {
//   currentInx += direction;
//   const scrollX = currentInx * carouselWidth;

//   carouselWrap.scrollTo({
//     left: scrollX,
//     behavior: "smooth",
//   });
// };

// // 자동 카로셀 1씩 넘겨지는 함수
// const startAutoCarousel = () => {
//   autocarouselInterval = setInterval(() => {
//     rotateCarousel(1);
//   }, 3000);
// };

// nextButton.addEventListener("click", () => {
//   rotateCarousel(1);
// });

// prevButton.addEventListener("click", () => {
//   rotateCarousel(-1);
// });

// initializeCarousel();
// startAutoCarousel();

// 빈응형 main calroucel

// $(document).ready(function () {
//   // main calroucel
//   $(".slick-wrap .slick-box").slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     draggable: false,
//     prevArrow: $(".main-slick .prev"),
//     nextArrow: $(".main-slick .next"),
//   });

//   // 빈응형 main calroucel
//   $(".slick-img-").slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     infinite: true,
//     arrows: false,
//   });
// });
const aniArea = tns({
  container: ".ani-container",
  autoplay: true,
  controls: false,
  navAsThumbnails: true,
  arrowKeys: true,
  autoplayHoverPause: true,
  autoplayButtonOutput: false,
  mouseDrag: true,
  preventScrollOnTouch: true,
  axis: "vertical",
});

const mainSlider = tns({
  container: ".slick-wrap .slick-box",
  autoplay: true,
  controls: true,
  navAsThumbnails: true,
  arrowKeys: true,
  autoplayHoverPause: true,
  autoplayButtonOutput: false,
  mouseDrag: true,
  preventScrollOnTouch: true,
  controlsContainer: ".arrow-slider",
});

const slider = tns({
  container: ".slick-img-",
  autoplay: true,
  controls: false,
  navAsThumbnails: true,
  arrowKeys: true,
  autoplayHoverPause: true,
  autoplayButtonOutput: false,
  mouseDrag: true,
  preventScrollOnTouch: true,
});

const categorySlick = tns({
  container: ".category-list .img-slick",
  items: 17,
  slideBy: 2,
  autoplay: false,
  controls: true,
  navAsThumbnails: true,
  arrowKeys: true,
  autoplayHoverPause: true,
  autoplayButtonOutput: false,
  mouseDrag: true,
  preventScrollOnTouch: true,
});

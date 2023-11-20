"use strict";

const productCarousel = tns({
  container: ".product-carousel-slider .slider-list",
  controls: false,
  navContainer: ".product-carousel-slider .thumbnail-list",
  navAsThumbnails: true,
  arrowKeys: true,
  autoplay: true,
  autoplayHoverPause: true,
  autoplayButtonOutput: false,
  mouseDrag: true,
  preventScrollOnTouch: true,
});

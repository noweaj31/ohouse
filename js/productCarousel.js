"use strict";

const productCarousel = tns({
  container: ".product-carousel-slider .slider-list",
  controls: false,
  navContainer: ".product-carousel-thumbnail .thumbnail-list",
  navAsThumbnails: true,
  arrowKeys: true,
  autoplay: true,
  autoplayHoverPause: true,
  autoplayButtonOutput: false,
  mouseDrag: true,
  preventScrollOnTouch: true,
});

// usergallery

const userGallery = tns({
  container: ".user-gallery-slider .slider-list",
  gutter: 4,
  edgePadding: 16,
  loop: false,
  controls: false,
  arrowKeys: true,
  mouseDrag: true,
  preventScrollOnTouch: true,
  items: 1,
  responsive: {
    768: {
      gutter: 6,
      edgePadding: 75,
      controls: true,
    },
  },
});

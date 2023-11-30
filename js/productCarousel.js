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
  mode: "gallery",
  responsive: {
    768: {
      mode: "gallery",
    },
  },
});

// usergallery
const userGalleryMobile = tns({
  container: ".user-gallery-slider.is-mobile .slider-list",
  navContainer: ".user-gallery.is-mobile  .thumnail-list",
  navAsThumbnails: true,
  controlsContainer: ".user-gallery-slider.is-mobile .user-gallery-controls",
  controls: true,
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

const userGalleryDesktop = tns({
  container: ".user-gallery-slider.is-desktop .slider-list",
  navContainer: ".user-gallery.is-desktop .thumnail-list",
  navAsThumbnails: true,
  controlsContainer: ".user-gallery-slider.is-desktop .user-gallery-controls",
  controls: true,
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

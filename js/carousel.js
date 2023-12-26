"use strict";

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
  container: ".category .img-slick",
  items: 14,
  slideBy: 1,
  loop: false,
  controls: true,
  arrowKeys: true,
  mouseDrag: true,
  preventScrollOnTouch: true,
  arrowKeys: true,
  autoplayHoverPause: true,
  autoplayButtonOutput: false,
  mouseDrag: true,
  preventScrollOnTouch: true,
  controlsContainer: ".category .arrow-slider",
  responsive: {
    768: {
      items: 14,
      slideBy: 3,
    },
  },
});
const todayDealSlider = tns({
  container: ".today-deal .item-container",
  loop: false,
  controls: true,
  arrowKeys: true,
  mouseDrag: true,
  preventScrollOnTouch: true,
  arrowKeys: true,
  autoplayHoverPause: true,
  autoplayButtonOutput: false,
  mouseDrag: true,
  preventScrollOnTouch: true,
  controlsContainer: ".today-deal .arrow-slider",
  responsive: {
    768: {
      items: 4,
      slideBy: 4,
      gutter: 20,
    },
  },
});

const interiorSlider = tns({
  container: ".interior-pic .interior-img",
  items: 2,
  gutter: 12,
  loop: false,
  controls: true,
  arrowKeys: true,
  mouseDrag: true,
  preventScrollOnTouch: true,
  arrowKeys: true,
  autoplayHoverPause: true,
  autoplayButtonOutput: false,
  mouseDrag: true,
  preventScrollOnTouch: true,
  controlsContainer: ".interior-pic .arrow-slider",
  responsive: {
    768: {
      gutter: 16,
      items: 4,
      slideBy: 4,
    },
    1024: {
      gutter: 20,
      items: 6,
      slideBy: 6,
    },
  },
});

const exhibitionSlider = tns({
  container: ".exhibition-content .exh-area",
  loop: false,
  controls: true,
  arrowKeys: true,
  mouseDrag: true,
  preventScrollOnTouch: true,
  arrowKeys: true,
  autoplayHoverPause: true,
  autoplayButtonOutput: false,
  mouseDrag: true,
  preventScrollOnTouch: true,
  controlsContainer: ".exhibition-content .arrow-slider",
  responsive: {
    768: {
      items: 4,
      slideBy: 4,
      gutter: 20,
    },
  },
});

const bestContentSlider = tns({
  container: ".best-content .cate-list",
  items: 13,
  slideBy: 6,
  gutter: 6,
  autoWidth: true,
  loop: false,
  controls: true,
  arrowKeys: true,
  mouseDrag: true,
  preventScrollOnTouch: true,
  arrowKeys: true,
  autoplayHoverPause: true,
  autoplayButtonOutput: false,
  mouseDrag: true,
  preventScrollOnTouch: true,
  controlsContainer: ".best-content .arrow-slider",
});

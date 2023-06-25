$(document).ready(function () {
  $(".main-slick").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    
  });
  $(".category-list").slick({
    slidesToShow: 13,
    slidesToScroll: 4,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: $("#aro_prev"),
    nextArrow: $("#aro_next"),
  });
  $(".item-slick").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
    autoplaySpeed: 2000,
    
  });
  
});

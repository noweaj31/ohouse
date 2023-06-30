$(document).ready(function () {
  $(".slick-img").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    
  });

  $(".slick-img-").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    
  });
  
  $(".img-slick").slick({
    slidesToShow: 13.7,
    slidesToScroll: 4,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    infinite: false,
    prevArrow: $("#aro_prev"),
    nextArrow: $("#aro_next"),
  });
  
  $(".item-container").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: $("#aro__prev"),
    nextArrow: $("#aro__next"),
  });
  
  $(".interior-img").slick({
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    infinite: false,
    arrows: true,
    prevArrow: $("#aro___prev"),
    nextArrow: $("#aro___next"),
  });

  $(".exh-area").slick({
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    infinite: false,
    arrows: true,
    prevArrow: $("#aro____prev"),
    nextArrow: $("#aro____next"),
  });

  // $(".cate-list").slick({
  //   slidesToShow: 15,
  //   slidesToScroll: 2,
  //   autoplay: false,
  //   autoplaySpeed: 2000,
  //   arrows: true,
  //   infinite: false,
  //   arrows: true,
  //   prevArrow: $("#aro_____prev"),
  //   nextArrow: $("#aro_____next"),
  // });
  
});

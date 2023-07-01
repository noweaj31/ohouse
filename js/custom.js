$(document).ready(function () {
  $(".slick-img").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    draggable:false,
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

  $(".cate-list").slick({
    slidesToShow: 15,
    slidesToScroll: 2,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    infinite: false,
    arrows: true,
    prevArrow: $("#aro_____prev"),
    nextArrow: $("#aro_____next"),
  });
  const slickSlider = $(".slider-wrap");
        const slideCount = slickSlider.slick("getSlick").slideCount;
        const slidesToShow = slickSlider.slick("getSlick").options.slidesToShow;
        $(".prev").hide();
        $(".prev").click(function () {
          $(".slider-wrap").slick("slickPrev");
          const currentSlide = $(".slider-wrap").slick("slickCurrentSlide");
          if (slideCount - slidesToShow !== currentSlide) {
            $(".next").show();
          }
          if (currentSlide === 0) {
            $(".prev").hide();
          }
        });

        $(".next").click(function () {
          $(".slider-wrap").slick("slickNext");
          const currentSlide = $(".slider-wrap").slick("slickCurrentSlide");
          if (slideCount - slidesToShow === currentSlide) {
            $(".next").hide();
          } else {
            $(".prev").show();
          }
        });
});

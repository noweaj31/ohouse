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
    slidesToScroll: 4,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    infinite: false,
    arrows: true,
    prevArrow: $("#aro_____prev"),
    nextArrow: $("#aro_____next"),
  });
  const slickSlider = $(".cate-list");
        const slideCount = slickSlider.slick("getSlick").slideCount;
        const slidesToShow = slickSlider.slick("getSlick").options.slidesToShow;
        $("#aro_____prev").hide();
        $("#aro_____prev").click(function () {
          $(".cate-list").slick("slickPrev");
          const currentSlide = $(".cate-list").slick("slickCurrentSlide");
          if (slideCount - slidesToShow !== currentSlide) {
            $("#aro_____next").show();
          }
          if (currentSlide === 0) {
            $("#aro_____prev").hide();
          }
        });

        $("#aro_____next").click(function () {
          $(".cate-list").slick("slickNext");
          const currentSlide = $(".cate-list").slick("slickCurrentSlide");
          if (slideCount - slidesToShow === currentSlide) {
            $("#aro_____next").hide();
          } else {
            $("#aro_____prev").show();
          }
        });
        
});

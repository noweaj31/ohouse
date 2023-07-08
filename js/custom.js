// $(document).ready(function () {
//   $(".slick-box").slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     draggable:false,
//   });
  

//   $(".slick-img-").slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     infinite: false,
//   });
  
//   $(".img-slick").slick({
//     slidesToShow: 13.7,
//     slidesToScroll: 4,
//     autoplay: false,
//     autoplaySpeed: 2000,
//     arrows: true,
//     infinite: false,
//     prevArrow: $(".img-slick .prev"),
//     nextArrow: $(".img-slick .next"),
//   });
  
//   $(".item-container").slick({
//     slidesToShow: 4,
//     slidesToScroll: 4,
//     autoplay: false,
//     autoplaySpeed: 2000,
//     arrows: true,
//     prevArrow: $(".item-container .prev"),
//     nextArrow: $(".item-container .next"),
//   });
  
  

//   $(".exh-area").slick({
//     slidesToShow: 4,
//     slidesToScroll: 2,
//     autoplay: false,
//     autoplaySpeed: 2000,
//     arrows: true,
//     infinite: false,
//     arrows: true,
//     prevArrow: $(".exh-area .prev"),
//     nextArrow: $(".exh-area .next"),
//   });
 
//     const slickSlider = $(".cate-list");
//     const slidesToShow = 15;

//     slickSlider.slick({
//       infinite: false,
//       slidesToShow: slidesToShow,
//       slidesToScroll: slidesToShow,
//       adaptiveHeight: false,
//       arrows: false,
//       draggable: false
//     });

//     let slideCount = slickSlider.slick("getSlick").slideCount;
//     let currentSlide = 0;

//     console.log(slideCount);

//     $(".prev").hide();
//     $(".prev").click(function () {
//       if (currentSlide > 0) {
//         currentSlide -= slidesToShow;
//         $(".cate-list").slick("slickGoTo", currentSlide);

//         if (currentSlide === 0) {
//           $(".prev").hide();
//         }

//         $(".next").show();
//       }

      
//     });

//     $(".next").click(function () {
//       if (currentSlide < slideCount - slidesToShow) {
//         currentSlide += slidesToShow;
//         $(".cate-list").slick("slickGoTo", currentSlide);

//         if (currentSlide >= slideCount - slidesToShow) {
//           $(".next").hide();
//         }

//         $(".prev").show();
//       }
//     });

//   const endTime = new Date();
//         endTime.setTime(endTime.getTime() + 8 * 60 * 60 * 1000);
//         console.log(endTime);

//         setInterval(() => {
//           const currentTime = new Date().getTime();
//           const remainingTime = endTime - currentTime;

//           let hours = Math.floor(
//             (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//           );
//           let minutes = Math.floor(
//             (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
//           );
//           let seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

//           hours = hours < 10 ? "0" + hours : hours;
//           minutes = minutes < 10 ? "0" + minutes : minutes;
//           seconds = seconds < 10 ? "0" + seconds : seconds;

//           document.getElementsByClassName("hours").textContent = hours;
//           document.getElementsByClassName("minutes").textContent = minutes;
//           document.getElementsByClassName("seconds").textContent = seconds;
//         }, 1000);

        
// });

AOS.init({
    duration: 900,
    easing: 'slide-up',
    once: true,
    anchorPlacement: 'top-bottom'
});

// $(".navbar-toggler").hover(function () {
//     $("#navbarToggleExternalContent").addClass("show")
// }, function () {
//     $("#navbarToggleExternalContent").remove("show")
// }
// );

// $(".navbar-toggler").toggleClass(
//     function () {
//         $("#navbarToggleExternalContent").addClass("show");
//     }, function () {
//         $("#navbarToggleExternalContent").removeClass("show");
//     }
// );

$(".navbar-toggler").on("click", function () {
    const button = $(".navbar-toggler");


    $("#navbarToggleExternalContent").toggle("slow", function () {
        if ($(this).is(":visible")) {
            button.text("Hide")
        } else {
            button.text("Read more")
        }
    })
})

function debounce(func, wait = 10, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  const sliderImages = document.querySelectorAll('.slide-in')
  function checkSlide(e){
      // console.log(e);

      sliderImages.forEach(sliderImage => {
          const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2 ;
          const imageBottom = sliderImage.offsetTop + sliderImage.height;
          const isHalfShown = slideInAt > sliderImage.offsetTop;
          const isNotScrolledPast = window.scrollY < imageBottom;
          if(isHalfShown && isNotScrolledPast){
              sliderImage.classList.add('active');
          }
      })
  }

  window.addEventListener('scroll', debounce(checkSlide))
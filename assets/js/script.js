$(document).ready(function () {
  var isCarouselInitialized = false;

  function initializeCarousel() {
    $('.stats-carasoul').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      draggable: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 3,
          },
        },
      ],
    });
    isCarouselInitialized = true;
  }

  function destroyCarousel() {
    $('.stats-carasoul').slick('unslick');
    isCarouselInitialized = false;
  }

  function checkScreenWidth() {
    var screenWidth = $(window).width();
    console.log('Screen width: ' + screenWidth);

    if (screenWidth < 850) {
      if (isCarouselInitialized) {
        destroyCarousel();
      }
    } else {
      if (!isCarouselInitialized) {
        initializeCarousel();
      }
    }
  }

  // Initial check
  checkScreenWidth();

  // Check and update on window resize
  $(window).resize(function () {
    checkScreenWidth();
  });
});

var inputField = document.getElementById('numberInput');

inputField.addEventListener('input', function () {
  if (this.value.length > 11) {
    this.value = this.value.slice(0, 11); // Truncate to 11 characters
  }
});

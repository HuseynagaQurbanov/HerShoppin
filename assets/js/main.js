$(document).ready(function () {
  $(".story-carousel").owlCarousel({
    loop: false,
    margin: 10,
    dots: false,
    responsive: {
      0: {
        items: 4,
      },
      600: {
        items: 7,
      },
      1000: {
        items: 10,
      },
    },
  });

  $(".widgets-carousel").owlCarousel({
    loop: false,
    autoWidth: true,
    dots: false,
    mouseDrag: true,
    pullDrag: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 6,
      },
    },
  });

  $(".same-product-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots:false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
});

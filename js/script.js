$(function() {
  // Owl Carousel
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 3,
    margin: 10,
    loop: true,
    nav: true,
    autoplay:true,
    autoplayTimeout: 2000,
    smartSpeed: 1000,
    animateOut: "slideOutDown",
    animateIn: "slideInDown",
  });
});

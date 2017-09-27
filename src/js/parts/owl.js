var $partnersSlider = $(".partners-slider"), $partnersSliderNav = $('.partners-slider-nav');
$(".news-slider").owlCarousel({
  loop: true,
  smartSpeed:750,
  // autoWidth:true, потом, возможно понадобится
  items: 1,
  nav: true,
  navText: ["<svg class='icon icon-arrow-left'><use xlink:href='svg/svg.svg#icon-arrow'></use></svg>", "<svg class='icon icon-arrow-right'><use xlink:href='svg/svg.svg#icon-arrow'></use></svg>"]
});

$partnersSlider.owlCarousel({
  nav: false,
  loop: true,
  // navText: ["<svg class='icon icon-arrow-left'><use xlink:href='svg/svg.svg#icon-arrow'></use></svg>", "<svg class='icon icon-arrow-right'><use xlink:href='svg/svg.svg#icon-arrow'></use></svg>"],
  margin: 40,
  responsive: {
    0: {
      items: 2
    },
    450: {
      items: 3
    },
    768: {
      items: 4
    },
    992: {
      items: 6
    }
  }
});


$partnersSliderNav.children(".owl-prev").on("click", function() {
  $partnersSlider.trigger('prev.owl.carousel');
});

$partnersSliderNav.children(".owl-next").on("click", function() {
  $partnersSlider.trigger('next.owl.carousel');
});


$(".article-more-items").owlCarousel({
  nav: true,
  loop: true,
  navText: ["<svg class='icon icon-arrow-left'><use xlink:href='svg/svg.svg#icon-arrow'></use></svg>", "<svg class='icon icon-arrow-right'><use xlink:href='svg/svg.svg#icon-arrow'></use></svg>"],
  margin: 20,
  autoWidth:true,
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 2
    },
    992: {
      items: 3
    },
    1200 : {
      items: 4
    }
  }
});
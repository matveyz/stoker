
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


$(".discounts-item_zoom").each(function () {
  var
    color,
    random = getRandomInt(1, 3);
  if (random == 1) {
    color = "#fde93d";
  } else if (random == 2) {
    color = "#f9791a";
  } else {
    color = "#44d157";
  }
  $(this).css({"border-bottom-color": color});
});

function backToTop() {
  var $bodyHtml = $("body, html");
  // browser window scroll (in pixels) after which the "back to top" link is shown
  var offset = 500,
    //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
    offsetOpacity = 1200,
    //duration of the top scrolling animation (in ms)
    scrollTopDuration = 700,
    //grab the "back to top" link
    $backToTop = $(".back-top"),
    lastScrollTop,
    //for extra function
    clicked = false;

  //hide or show the "back to top" link
  $(window).scroll(function () {
    if ($(this).scrollTop() > offset) {
      $backToTop.addClass("is-visible");
    } else if (clicked === false) {
      $backToTop.removeClass("is-visible fade-out");
    }
    if ($(this).scrollTop() > offsetOpacity) {
      // $backToTop.addClass("fade-out");
    }
    if ($(this).scrollTop() > lastScrollTop-50) {
      $backToTop.removeClass("is-turned")
    }

  });

  //smooth scroll to top
  $backToTop.on("click", function (event) {
    event.preventDefault();
    var $self = $(this);
    if ($self.hasClass("is-turned")) {
      clicked = false;
      $bodyHtml.animate({
          scrollTop: lastScrollTop
        }, scrollTopDuration, function () {
          $self.removeClass("is-turned");
        }
      )
    } else {
      clicked = true;
      lastScrollTop = $(window).scrollTop();
      $bodyHtml.animate({
          scrollTop: 0
        }, scrollTopDuration, function () {
          $self.addClass("is-turned");
        }
      )
    }
  });
}
backToTop();


var $filterLabel = $(".filter-type-items-inner").find("label");
$filterLabel.on("click", function () {
  var $filterLabelFor = $(this).attr("data-for"),
    $filterInput = $(".filter-type-items-inner").find("input[name="+$filterLabelFor+"]");
    $filterInput.prop("checked", !$filterInput.prop("checked"));
});
var $showMoreBtn = $(".show-more-btn");
$showMoreBtn.on("click", function () {
  var $showMoreBlock = $(this).parent().find(".show-more-block"),
    $showMoreLoader = $(this).children(".ring"),
    $showMoreBtnInner = $(this).children(".show-more-btn-inner"),
    $firstHiddenBlock = $(this).parent().find(".show-more-block.is-hidden:first");
  if ($showMoreBlock.hasClass("is-hidden")) {
    $showMoreBtnInner.addClass("is-hidden");
    $showMoreLoader.removeClass("is-hidden");
    setTimeout(function () {
      $firstHiddenBlock.removeClass("is-hidden");
      $firstHiddenBlock.children().each(function (i) {
          var $self = $(this);
        setTimeout(function () {
          $self.css("opacity", "1");
        }, 130*i);
      });
      $showMoreLoader.addClass("is-hidden");
      if ($showMoreBlock.hasClass("is-hidden")) {
        $showMoreBtnInner.removeClass("is-hidden");
      }
    }, 1000);

    return (function () {
      // funct after
    })()
  }
});
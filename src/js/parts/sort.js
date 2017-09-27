var $sortBtnLink = $("a.sort-btn");
if ($(window).width() < 992) {
  $sortBtnLink.on("click", function (e) {
    var $selfSort = $(this).closest(".sort");
    if ($(this).hasClass("is-active")) {
      e.preventDefault();
      $selfSort.toggleClass("is-open");
    } else {
      $selfSort.removeClass("is-open");
    }
  });
}
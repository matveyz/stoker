$.fn.outside = function (ename, cb) {
  return this.each(function () {
    var $this = $(this),
      self = this;

    $(document).bind(ename, function tempo(e) {
      if (e.target !== self && !$.contains(self, e.target)) {
        cb.apply(self, [e]);
        if (!self.parentNode) $(document.body).unbind(ename, tempo);
      }
    });
  });
};

function addAnimationInOut(outStatement, element, inAnimationClass, outAnimationClass, extraElement, hide, extraClass) {
  if (outStatement) {
    if (hide) {
      (extraElement || "") ? extraElement.removeClass("is-hidden").addClass("is-visible") : false;
    } else {
      (extraElement || "") ? extraElement.removeClass(extraClass) : false;
    }
    element.removeClass(inAnimationClass).addClass(outAnimationClass);
  } else {
    if (hide) {
      (extraElement || "") ? extraElement.removeClass("is-visible").addClass("is-hidden") : false;
    } else {
      (extraElement || "") ? extraElement.addClass(extraClass) : false;
    }
    element.removeClass(outAnimationClass).addClass(inAnimationClass);
  }
}


function openTabs($tab, $cont) {
  $tab.click(function () {
    var $tabId = $(this).attr("data-tab");
    if ($(this).hasClass("filter-item")) {
      fixedMenu.mobile.wrapper.toggleClass("is-open");
      $(this).siblings().toggleClass("is-hidden");
    }
    if ($(this).hasClass("is-active")) {
      $tab.removeClass("is-active");
      $cont.removeClass("is-active");
    } else {
      $tab.removeClass("is-active");
      $cont.removeClass("is-active");
      $(this).toggleClass("is-active");
      $("#" + $tabId).toggleClass("is-active");
    }
  })
}
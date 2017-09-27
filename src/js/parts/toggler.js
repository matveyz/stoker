module.exports = {
  click: function ($el, toggler) {
    $el.on("click", function () {
      toggler();
    });
  },
  on: function (elements, extraClass) {
    $.each(elements, function (key, value) {
      if (extraClass === undefined) {
        value.addClass("is-active");
      } else {
        value.addClass(extraClass);
      }
    });
  },
  off: function (elements, extraClass) {
    $.each(elements,function (key, value) {
      if (extraClass === undefined) {
        value.removeClass("is-active");
      } else {
        value.removeClass(extraClass);
      }
    });
  },
  toggle: function (elements, extraClass) {
    $.each(elements, function (key, value) {
      if (extraClass === undefined) {
        value.toggleClass("is-active");
      } else {
        value.toggleClass(extraClass);
      }
    });

  }
};
$("[data-mfp-src*=register-form]").on("click", function () {
  if($(this).hasClass("force-register")) {
    $("[data-tab=reg-form-2]").trigger("click");
  } else {
    $("[data-tab=reg-form-1]").trigger("click");
  }
});
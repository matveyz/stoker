function popupMaker($selector, extraParams) {
  $selector.magnificPopup({
    // Delay in milliseconds before popup is removed
    removalDelay: 250,

    // Class that is added to popup wrapper and background
    // make it unique to apply your CSS animations just to this exact popup
    type: "inline",
    preloader: false,
    focus: "#name",
    closeOnBgClick: true,
    fixedBgPos: true,

    // When elemened is focused, some mobile browsers in some cases zoom in
    // It looks not nice, so we disable it:
    callbacks: {
      beforeOpen: function () {
        if ($(window).width() < 700) {
          this.st.focus = false;
        } else {
          this.st.focus = "#name";
        }
      }
    }
  });
}

popupMaker($("[data-mfp-src*=send-msg-form]"));
popupMaker($("[data-mfp-src*=register-form]"));

var
  $userBtn = $(".user"), $userMenu = $(".user-menu"),
  $body = $("body"), $offCanvas = $(".off-canvas"), $bodyOverflow = $(".body-overflow"),
  $fixedMenu = {
    name: $(".fixed-menu"),
    logo: $(".fixed-menu-off-logo"),
    mobile: {
      wrapper: $(".fixed-menu-mobile-wrapper"),
      searchBtn: $(".fixed-menu-mobile-searchbtn")
    }
  };
$(document).ready(function () {
  if ($(window).width() < 992) {
    function offCanvas() {

      $fixedMenu.logo.on("click", function () {
        // $fixedMenu.logoBtn.toggleClass("icon-logo icon-menu");
        $offCanvas.add($bodyOverflow).toggleClass("is-active");
        $body.toggleClass("is-hidden");

        $bodyOverflow.on("click", function () {
          // $fixedMenu.logoBtn.removeClass("icon-menu").addClass("icon-logo");
          $offCanvas.add($bodyOverflow).removeClass("is-active");
          $body.removeClass("is-hidden");
        });
      });

    }

    offCanvas();

    function userMenu() {
      $userBtn.on("click", function () {
        $userMenu.toggleClass("is-active");
        $fixedMenu.mobile.wrapper.removeClass("is-active");
        $fixedMenu.mobile.searchBtn.removeClass("is-active");
      });
    }

    userMenu();
  }
});
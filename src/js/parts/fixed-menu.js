$(function () {
  var turn = require("./toggler"), calcFrom = require("./calc-from"),
      $fullLogo = $(".logo"), $search = $(".search"), $userMenu = $(".user-menu"),
      $fixedMenu = {
        name: $(".fixed-menu"),
        logo: $(".fixed-menu-off-logo"),
        mobile: {
          wrapper: $(".fixed-menu-mobile-wrapper"),
          searchBtn: $(".fixed-menu-mobile-searchbtn")
        },
        filter: {
          name: $(".fixed-menu-filter"),
          activator: $(".fixed-menu-filter-btn")
        },
        search: $(".fixed-menu-search")
      };
  $fixedMenu.logoBtn = $fixedMenu.logo.children("svg");
  $fixedMenu.mobile = {
    wrapper: $fixedMenu.mobile.wrapper,
    searchBtn: $fixedMenu.mobile.searchBtn,
    inner: $fixedMenu.mobile.wrapper.find(".fixed-menu-filter-inner"),
    search: $fixedMenu.mobile.wrapper.find(".fixed-menu-mobile-search")
  };
  $fixedMenu.filter = {
    name: $fixedMenu.filter.name,
    activator: $fixedMenu.filter.activator,
    menu: $fixedMenu.filter.activator.siblings(".filter"),
    inner: $fixedMenu.filter.activator.parent()
  };


  function activateFilter() {
    $(document).on("click", $(".fixed-menu-filter-btn"), function (e) {
      if ($(window).width() < 1280) {
        // if the target of the click isn"t the container...nor a descendant of the container
        var outStatement = (!$fixedMenu.filter.activator.find("*").is(e.target) && !$fixedMenu.filter.activator.is(e.target)) && !$(e.target).closest($fixedMenu.filter.menu).length && !$(e.target).closest($search).length;
        if (outStatement) {
          turn.off([$fixedMenu.filter.name, $fixedMenu.filter.menu, $fixedMenu.filter.inner, $fixedMenu.filter.activator, $fixedMenu.search]);
        } else {
          if (!$(e.target).closest($search).length || $(e.target).closest($fixedMenu.search).length) {
            turn.on([$fixedMenu.filter.name, $fixedMenu.filter.menu, $fixedMenu.filter.inner, $fixedMenu.filter.activator, $fixedMenu.search]);
          } else if ($(window).width() > "992") {
            turn.off([$fixedMenu.filter.name, $fixedMenu.filter.menu, $fixedMenu.filter.inner, $fixedMenu.filter.activator, $fixedMenu.search]);
          }
        }
      }
    });
    if ($(window).width() < 1280) {
      turn.off([$fixedMenu.filter.name, $fixedMenu.filter.menu, $fixedMenu.filter.inner, $fixedMenu.filter.activator, $fixedMenu.search]);
    }
    if ($(window).width() >= 1280) {
      turn.on([$fixedMenu.filter.name, $fixedMenu.filter.menu, $fixedMenu.filter.inner, $fixedMenu.filter.activator, $fixedMenu.search]);
    }
  }

  activateFilter();

  function test() {
    if ($(window).width() < 992) {
      calcFrom.widthElementWidth($fixedMenu.mobile.inner, $fixedMenu.mobile.inner.find(".filter").children("ul"));
      calcFrom.selectorSiblingsWidth($fixedMenu.mobile.search, "margin-left");
    } else {
      calcFrom.selectorSiblingsWidth($fixedMenu.filter.inner, "margin-left");
    }
  }

  test();

  $(window).on("resize", function () {
    activateFilter();
    test();
  });
  function mobileSearch() {
    var $filter = {
      name: $(".filter"),
      tabs: {
        all: ""
      }
    };
    $filter.tabs = {
      all: $filter.name.find(".filter-item")
    };
    $fixedMenu.mobile.searchBtn.on("click", function () {
      turn.toggle([$fixedMenu.mobile.searchBtn, $fixedMenu.mobile.wrapper]);
      turn.off([$userMenu, $filter.tabs.all]);
      $filter.tabs.all.removeClass("is-hidden");
      $fixedMenu.mobile.wrapper.removeClass("is-open");
    });
  }

  mobileSearch();

  if ($fullLogo.length !== 0) {
    var
        didScroll,
        lastScrollTop = 0,
        startBreakpoint = 600;

    hasScrolled();

    $(window).scroll(function () {
      didScroll = true;
    });

    setInterval(function () {
      if (didScroll) {
        hasScrolled();
        didScroll = false;
      }
    }, 100);

    function hasScrolled() {
      var st = $(this).scrollTop();
      if (st < startBreakpoint) {
        $fixedMenu.name.addClass("is-nav-up");
      } else {
        $fixedMenu.name.removeClass("is-nav-up");
      }
      lastScrollTop = st;
    }
  } else {
    $fixedMenu.name.removeClass("is-nav-up");
  }
});
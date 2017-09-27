/**
 *  @author Vadim Avdieiev
 *  jQuery non-strict non-scoped tabs
 *  TODO: do non-jquery tabs :D, make both scoped and unscoped versions
 */
$(function () {
  var
      turn = require("./toggler"),
      getAttributes = require("./get-attributes"),
      tabs = {
        name: $(".tabs"),
        tab: $(".tabs-item"),
        content: $(".tabs-item-content")
      },
      $bodyOverflow = $(".body-overflow"), $body = $("body"),
      $fixedMenu = {
        mobile: {
          wrapper: $(".fixed-menu-mobile-wrapper")
        }
      },
      $filter = {
        name: $(".filter")
      };

  $filter.tabs = {
    all: $filter.name.find(".filter-item"),
    cont: $filter.name.children(".filter-type")
  };
  $filter.tabs.sub = {
    all: $filter.tabs.cont.children("ul").eq(0).find("li"),
    cont: $filter.tabs.cont.children("div:not(:first-child)")
  };


  tabs.name.find(".tabs-item").on("click", function (e) {
    var
        $self = $(this),
        // value of TAB with number (ex:reg-form-1)
        tab_id = $self.attr("data-tab"),
        // value of TABS, that are closest parent of this TAB (ex:reg-form)
        $tabsContainer = $self.closest(".tabs"),
        $tabsContainer_id = $tabsContainer.attr("data-tabs-container"),
        $openTab = $("[data-tab=" + tab_id + "]"),
        $openTabContent = $("[data-tab-content=" + tab_id + "]"),
        $selfTabWithContent = $.merge($openTab, $openTabContent),

        turnOff = false;

    // extra MOBILE filter-search logic only!
    if ($(window).width() < 992) {
      if ($self.hasClass("filter-item")) {
        $fixedMenu.mobile.wrapper.toggleClass("is-open");
        $self.siblings().toggleClass("is-hidden");
        if ($self.hasClass("is-active")) {
          turn.off([$filter.tabs.all, $filter.tabs.cont]);
          return;
        }
      }
    } else {
      if ($self.hasClass("filter-item")) {
        if ($self.hasClass("is-active")) {
          turn.off([$filter.tabs.all,$filter.tabs.cont]);
          return;
        }
      }
    }

    if ($(window).width() < 992) {
      var $selfSort = $self.closest(".sort");
      if ($self.hasClass("sort-btn")) {
        if ($self.hasClass("is-active")) {
          $selfSort.toggleClass("is-open");
        } else {
          getAttributes($self);
          if ($self.attr("data-tab") == "single-filter-1") {
            $bodyOverflow.on("click", function () {
              $selfTabWithContent.add($bodyOverflow).removeClass("is-active");
              $body.removeClass("is-hidden");
              $selfSort.removeClass("is-open");
            });
            $body.addClass("is-hidden");
            $selfSort.addClass("is-open");
            $bodyOverflow.addClass("is-active");
          } else {
            $selfSort.removeClass("is-open");
            $bodyOverflow.removeClass("is-active");
          }
        }
      }
    }
    // extra logic for turn off tab!
    if ($tabsContainer.attr("data-toggle-tabs") !== undefined && $openTab.hasClass("is-active")) {
      turnOff = true;
    }


    // deactivate (remove active class) all TAB_s (*closest to this parent!)
    tabs.tab.filter(function () {
      console.log(1);
      // filter each TAB value that consist value of TABS (*closest to this parent!)
      // (ex:reg-form-2, reg-form-3)
      return $(this).attr("data-tab").lastIndexOf($tabsContainer_id, 0) === 0;
    }).removeClass("is-active");
    // and deactivate all of this TAB-s

    // deactivate all (*closest to this parent!) TAB_s-CONTENT
    tabs.content.filter(function () {
      // similarly to TAB_s but with data-tab-content, not data-tab ...
      // \\similarly to TAB_s but with id, not data-tab ...
      return $(this).attr("data-tab-content").lastIndexOf($tabsContainer_id, 0) === 0;
    }).removeClass("is-active");

    // activate (add active class) clicked TAB and its TAB-CONTENT
    //
    // \\ (must have id = clicked TAB`s data-tab)


    if (turnOff) {
      // extra logic for turn off tab!
      $selfTabWithContent.removeClass("is-active");
    } else {
      $selfTabWithContent.addClass("is-active");
    }
    return false;
  });

});

$("[data-countdown]").each(function () {

  var
    $this = $(this),
    finalDate = $this.data("countdown");

  $this.countdown(finalDate, function (event) {
    $this.html(event.strftime(''
      + '<div class="countdown-title">' + $this.data('countdowntext') + '</div>'
      + '<div class="countdown-dash"><div class="digit day">%D</div><div class="countdown-dash_title">дней</div></div>'
      + '<div class="countdown-dash"><div class="digit hour">%H</div><div class="countdown-dash_title">часов</div></div>'
      + '<div class="countdown-dash"><div class="digit min">%M</div><div class="countdown-dash_title">минут</div></div>'
      + '<div class="countdown-dash"><div class="digit sec">%S</div><div class="countdown-dash_title">секунд</div></div>'
    )).on('finish.countdown', function () {
      var $discItem = $this.closest(".discounts-item");
      $discItem.addClass("times-up");
      $discItem.find(".discounts-item-info-inner")
        .append("<div class='icon-watch-wrapper'>" +
                "<svg class='icon icon-watch'><use xlink:href='svg/svg.svg#icon-watch'></use></svg>" +
                "<svg class='icon icon-watch-expire'><use xlink:href='svg/svg.svg#icon-watch-expire'></use></svg>" +
                "</div>");
      $this.children(".countdown-title")
        .html("<div class='countdown-title-header'>Время вышло</div><div class='countdown-title-desc'>акция завершена</div>");
      $this.append("<div><button class='btn-bg-secondary'>Удалить</button></div>")
    });
  })

});



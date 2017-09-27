var turn = require("./toggler");
var
  readLess = "Читать меньше",
  readMore = "Читать дальше";
$(".read-more").on("click", function () {
  turn.toggle([$(this), $(".read-more-text")]);
  $(this).hasClass("is-active") ? this.innerHTML = readLess : this.innerHTML = readMore;
});
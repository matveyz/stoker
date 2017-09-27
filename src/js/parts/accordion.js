var turn = require("./toggler");
var $accordion = {
  item: $(".accordion-item")
};
$accordion.item.on("click", function () {
  if ($(this).hasClass("is-active")) {
    turn.off([$(this)]);
  } else {
    turn.off([$accordion.item]);
    turn.on([$(this)]);
  }
});
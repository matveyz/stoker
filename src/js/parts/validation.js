var turn = require("./toggler");
var $formRequired = $("form").find("input,textarea,select").filter("[required]"),  $reqMsg;
$formRequired.on("invalid", function (e) {
  $reqMsg = $(this).closest("form").find(".required-msg");
  e.target.setCustomValidity("");
  if (!e.target.validity.valid) {
    turn.on([$reqMsg, $(this)], "is-error");
    event.preventDefault();
  }
});

$formRequired.on("input", function (e) {
  turn.off([$reqMsg, $(this)], "is-error");
});
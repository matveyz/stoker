var turn = require("./toggler"),
  $aboutTabs = {
    name: $(".how-it-works")
  };
$aboutTabs.btn = $aboutTabs.name.find(".how-top").find("button");
$aboutTabs.photo = $aboutTabs.name.find(".how-main-block-photo");
$aboutTabs.text = $aboutTabs.name.find(".how-main-block-text");

$aboutTabs.btn.on("click", function () {
  if (!$(this).hasClass("is-active")) {
    turn.toggle([$aboutTabs.btn,$aboutTabs.photo,$aboutTabs.text]);
  }
});
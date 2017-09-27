var ResizeSensor = require('../lib/ResizeSensor.min');
module.exports = {
  selectorSiblingsWidth: function ($element, selector) {
    var $siblings = $element.siblings();
    new ResizeSensor($siblings, function () {
      $element.css(selector, $siblings.width() + 0.5);
    });
  },
  widthElementWidth: function ($element1, $element2) {
    new ResizeSensor($element2, function () {
      $element1.css("width", ($element2.width()));
    });
  }
};



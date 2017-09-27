module.exports = function ($el) {
  $el.each(function () {
    $.each(this.attributes, function () {
      // this.attributes is not a plain object, but an array
      // of attribute nodes, which contain both the name and value
      if (this.specified) {
        console.log(this.name, " => ", this.value);
      }
    })
  });
  console.log("============================");
};
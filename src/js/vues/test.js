import Vue from 'vue';
Vue.mixin({
  created: function () {
    let show = false;
    console.log(show);
  },
  methods: {
    openModal() {
      if (this.show) {
        this.show = true;
        $('html').css({
          'overflow': 'hidden',
          'margin-right': '17px'
        });
      }
    },
    closeModal() {
      if (this.show) {
        this.show = false;
        $('html').removeAttr("style");
      }
    }
  },
  mounted: function () {
    const self = this;
    document.addEventListener('keydown', function () {
      if (event.keyCode === 27 && self.show) { //on ESC
        self.closeModal();
      }
    });
  },
});

export default {
  name: 'modal_in-future',
  props: ['modalInFuture'],
  methods: {
    closeModal: function () {
      if (this.$root.modal.showInFuture === true) {
        this.$root.modal.showInFuture = false;
        $('html').removeAttr("style");
      }
    }
  },
  mounted: function () {
    const self = this;
    document.addEventListener('keydown', function () {
      if (event.keyCode === 27) {//on ESC
        self.closeModal();
      }
    })
  }
}
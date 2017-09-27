export default {
  name: 'modal_send-msg',
  props: ['modalSendMsg'],
  methods: {
    closeModal: function () {
      if (this.$root.modal.show === true) {
        this.$root.modal.show = false;
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
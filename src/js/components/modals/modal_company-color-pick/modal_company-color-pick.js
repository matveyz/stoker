import {mapGetters, mapActions} from 'vuex';

export default {
  name: 'modal_company-color-pick',
  computed: {
    ...mapGetters([
      'colors', 'pickedColor'
    ]),
  },
  methods: {
    ...mapActions(['toggleColor']),
    pickedEl(color) {
      if (this.pickedColor == color) {
        return 'is-active';
      }
    },
    saveColor() {
      this.$store.dispatch('saveColor');
      this.$parent.closeModal();
    }
  }
}
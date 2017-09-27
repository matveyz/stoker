export default {
  name: 'modal_confirm-delete',
  data() {
    return {
      delete: false
    }
  },
  methods: {
    openModal() {
      this.$parent.openModal();
    },
    closeModal() {
      this.$parent.closeModal();
    },
    confirmDelete() {
      this.$store.dispatch('citiesStreetsSearch/confirmDelete');
      this.closeModal();
      this.$emit('delete-confirmed');
    },
  }
};

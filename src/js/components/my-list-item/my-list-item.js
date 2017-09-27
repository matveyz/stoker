import modal from '../modals/modal.vue';
import modalConfirmDelete from '../modals/modal_confirm-delete/modal_confirm-delete.vue';
export default {
  name: 'my-list-item',
  props: ['myListItem'],
  components: {
    modal,
    'modal_confirm-delete': modalConfirmDelete
  },
  data(){
    return {
      removeItem: {}
    }
  },
  methods: {
    removeListItem: function (item) {
      this.$refs.modalConfirm.openModal();
      this.removeItem = item;
    },
    openModal: function (item) {
      this.$emit('show-list-item', item);
    },
    confirmRemove(){
      this.$refs.modalConfirm.openModal();
      //return false;
    },
    removeConfirmed(){
      let list = this.$parent.getListItems;
      list.splice(list.indexOf(this.removeItem), 1);
      this.removeItem = {};
    }
  },
  computed: {
  },
  filters:{
    toCountProductsString(stores){
      let value = 0;
      stores.forEach((store) => { value += store.products.length });
      switch (value.toString().slice(-1)){
        case '1':
          return value + ' товар';
        case '2':
        case '3':
        case '4':
          return value + ' товара';
        default:
          return value + ' товаров'
      }
    }
  }
}
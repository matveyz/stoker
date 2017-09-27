import {mapGetters, mapActions} from 'vuex';
import HeaderblockExtra from '../../header-block-extra/header-block-extra.vue';
import dropdown from '../../../utilities/dropdown/dropdown.vue';
import tooltip from '../../../utilities/tooltip/tooltip.vue';
import modalConfirmDelete from '../../modals/modal_confirm-delete/modal_confirm-delete.vue';
import productCounter from '../../../components/product-counter/product-counter.vue';
export default {
  props: ['listItem'],
  components: {
    'header-extra': HeaderblockExtra,
    dropdown,
    tooltip,
    'modal_confirm-delete': modalConfirmDelete,
    productCounter
  },
  data(){
    return {
      dropdownItems: [
        {icon: 'print', name: 'Распечатать', link: '#', active: true},
        {icon: 'whatsapp', name: 'Whatsapp', link: '#', active: false},
        {icon: 'viber', name: 'Viber', link: '#', active: false},
        {icon: 'telegram', name: 'Telegram', link: '#', active: false},
        {icon: 'evernote', name: 'Evernote', link: '#', active: false},
        {icon: 'email', name: 'На почту', link: '#', active: false}
      ],
      isEdited: true,
      listItemProducts: this.listItem.products,
      stores: this.listItem.stores,
    }
  },
  computed: {
    ...mapGetters('products', ['getProductById']),
    ...mapGetters('stores', ['getStoreById']),
    /*getProducts(){
      return this.listItemProducts
          .map(product => {
            return Object.assign(this.getProductById(product.product_id), product);
          });
    },
    getProductsTotal(){
      return this.getProducts
          .map(product => parseInt(product.price) * parseInt(product.count))
          .reduce((prev, current) => prev + current);
    },
    getStores(){
      return this.getProducts
          .map(product => {
            return this.getStoreById(product.store_id);
          })
          .filter((value, index, self) => {
            return self.indexOf(value) === index;
          });
    },*/


  },
  name: 'modal-content_my-list',
  methods: {
    // ...mapActions('myListItems', ['calculateTotal']),
    calculateTotal(product){
      product.total = parseInt(product.price) * parseInt(product.count)
    },
    getStoreProducts(store_id){
      return this.getProducts.filter(product => product.store_id === store_id);
    },
    getProductTotal(product){
      return parseInt(product.price) * parseInt(product.count);
    },
    isExpired(value){
      let today = new Date,
          res = Date.parse(value) - today;
      return (res <= 0) ? true : false;
    },
    unique(value, index, self) {
      return self.indexOf(value) === index;
    },
    editList(){
      this.isEdited = !this.isEdited;
    },
    confirmModalListRemove(){
      this.$parent.closeModal();
      this.$parent.$parent.$refs.myListItems.$refs.modalConfirm.openModal();
    },
    goLink(link){
      window.open(link);
    },
    removeProduct: (item) => {console.log(item)}
},
  filters: {
    сurrency(value){
      return value + ' грн'
    },
    toProductsString(value){
      switch (value.slice(-1)) {
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
};
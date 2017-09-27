import myListItem from '../components/my-list-item/my-list-item.vue';
import modalInFuture from '../components/modal_in-future/modal_in-future.vue';
import modal from '../components/modals/modal.vue';
import modalContentMyList from '../components/modals/modal-content_my-list/modal-content_my-list.vue';
import modalConfirmDelete from '../components/modals/modal_confirm-delete/modal_confirm-delete.vue';
import store from  '../store/index';
import Vue from  'vue';
import {mapGetters, mapActions} from 'vuex';

var myList = new Vue({
  store,
  el: '#my-lists',
  components: {
    'my-list-item': myListItem,
    'modal_in-future': modalInFuture,
    modal,
    'modal-content_my-list': modalContentMyList,
    'modal_confirm-delete': modalConfirmDelete
  },
  data: {
    delete: [
      {name: "Вы действительно хотите удалить выбранный список?"}
    ],
    showModal: false,
    current: {}
  },
  computed: {
    ...mapGetters('myListItems',['getListItems', 'getActiveItem']),
    currentListItem(){
      return this.getActiveItem;
    },
  },
  methods: {
    ...mapActions('myListItems', ['activateItem', 'removeAllList']),
    confirmRemoveLists(){
      this.$refs.modalConfirm.openModal();
    },
    removeLists: function () {
      let list = this.getListItems;
      list.forEach(function (item, i, arr) {
        setTimeout(function () {
          arr.splice(arr[i], 1)
        }, i * 200)
      })
    },
    openModal (item){
      this.showModal = !this.showModal;
      this.current = item;
      this.activateItem(item);
      this.$refs.modal.openModal();
    },
    closeModal () {
      this.showModal = !this.showModal;
      this.activateItem(this.getActiveItem);
      this.current = {};
    }
  }
});

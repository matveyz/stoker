import {mapGetters, mapActions} from 'vuex';
import Multiselect from '../../lib/vue-multiselect_after-tags/Multiselect.vue'
// import VueScrollBar from 'vue2-scrollbar';
import modal from '../modals/modal.vue';
import modalConfirmDelete from '../modals/modal_confirm-delete/modal_confirm-delete.vue';

export default {
  name: 'cities-streets-search',
  components: {
    Multiselect,
    // 'vue-scrollbar': VueScrollBar,
    'modal': modal,
    'modal_confirm-delete': modalConfirmDelete
  },
  computed: {
    ...mapGetters('citiesStreetsSearch', [
      'citiesList',
      'streetsList'
    ])
  },
  methods: {
    ...mapActions('citiesStreetsSearch', [
      'updateValueAction',
      'filterStreetsByCities'
    ]),

  }
}
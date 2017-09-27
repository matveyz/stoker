import {mapGetters, mapActions} from 'vuex';
import partnerCatalog from '../partner-catalog/partner-catalog.vue';
import sort from '../sort/sort.vue';
import modal from '../modals/modal.vue';
import modalCatalogCreate from '../modals/modal_catalog-create/modal_catalog-create.vue';

export default {
  name: 'partner-my-catalogs',
  components: {
    'partner-catalog' : partnerCatalog,
    'sort' : sort,
    'modal': modal,
    'modal_catalog-create': modalCatalogCreate,
  },
  computed: {
    ...mapGetters('partnerCatalogs', ['catalogs'])
  },
  methods: {
    openModal() {
      this.$refs.modal.openModal();
    }
    // ...mapActions('partnerCatalogs', ['activateCatalog']),
  }
}
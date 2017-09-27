import {mapGetters, mapActions} from 'vuex';
import modal from '../modals/modal.vue';
import modalCompanyColorPick from '../modals/modal_company-color-pick/modal_company-color-pick.vue';

export default {
  name: 'partner-settings-company',
  components: {
    'modal': modal,
    'modal_company-color-pick': modalCompanyColorPick,
  },
  computed: {
    ...mapGetters([
      'modalBtn', 'tooltip', 'pickedColor'
    ])
  },
  methods: {
    ...mapActions([
      'openTooltip'
    ]),
    openModal() {
      this.$store.dispatch('setModalBtn');
      console.log(this.$refs);
      console.log(this.$refs.modal);
      this.$refs.modal.openModal();
    }
  }
}
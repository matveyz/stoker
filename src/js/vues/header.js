import store from  '../store/index';
import Vue from  'vue';

import modal from '../components/modals/modal.vue';
import socialIcons from '../components/social-icons/social-icons.vue';
import modalRegisterForm from '../components/modals/modal_register-form/modal_register-form.vue';
var header = new Vue({
  el: '#header',
  components: {
    'social-icons': socialIcons,
    'modal_register-form': modalRegisterForm,
    'modal': modal
  },
  store,
  methods: {
    openModal() {
      this.$store.dispatch('modal/openModal');
    }
  }
});

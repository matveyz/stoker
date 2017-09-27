import store from  '../store/index';
import Vue from 'vue';

import partnerMyCatalogs from '../components/partner-my-catalogs/partner-my-catalogs.vue';

new Vue({
  el: '#partner-my-catalogs',
  components: {
    'partner-my-catalogs' : partnerMyCatalogs,
  },
  store
});

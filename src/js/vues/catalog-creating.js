import store from  '../store/index';
import Vue from 'vue';
import {mapGetters, mapActions} from 'vuex';
import scrollToTop from '../lib/sctollToTop'

import menu from '../components/catalog-creating/menu/menu.vue';

import instruction from '../components/catalog-creating/instruction/instruction.vue';
import mainData from '../components/catalog-creating/main-data/main-data.vue';
import catalogEditing from '../components/catalog-creating/catalog-editing/catalog-editing.vue';
import viewAndPublish from '../components/catalog-creating/view-and-publish/view-and-publish.vue';

new Vue({
  store,
  el: '#catalog-creating',
  data: {
    currentView: 'instruction',
  },
  components: {
    'catalog-creating-menu': menu,
    'instruction': instruction,
    'main-data': mainData,
    /*'catalog-editing': catalogEditing,*/
    'view-and-publish': viewAndPublish
  },

  computed: {
    ...mapGetters('catalogCreateInstruction', ['steps', 'currentStep'])
  },
  methods: {
    ...mapActions('catalogCreateInstruction', ['changeStep', 'nextStep']),
    changeView(step){
      this.changeStep(step)
        .then((component) => {
          this.currentView = component;
          scrollToTop(500);
        })
        .catch(error => console.log(error));
    },
  },
});

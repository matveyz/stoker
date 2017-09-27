import {mapGetters} from 'vuex';
import Headerblock from '../../header-block/header-block.vue';
import HeaderblockExtra from '../../header-block-extra/header-block-extra.vue';
import Countdown from '../../countdown/countdown.vue';

import modal from '../../modals/modal.vue';
import modalCatalogSaved from '../../modals/modal_catalog-saved/modal_catalog-saved.vue';
import modalCatalogPublished from '../../modals/modal_catalog-published/modal_catalog-published.vue';

export default {
  components: {
    'header-block' : Headerblock,
    'header-extra' : HeaderblockExtra,
    'countdown' : Countdown,
    'modal': modal,
    'modal_catalog-saved': modalCatalogSaved,
    'modal_catalog-published': modalCatalogPublished,
  },
  computed: {
    ...mapGetters('catalogCreateInstruction', ['nextStep', 'prevStep'])
  },
  methods: {
    changeStep(){
      this.$emit('next-step');
    },
    goPrevStep(){
      console.log(this.prevStep);
      this.$emit('prev-step', this.prevStep);
    },
    openModalCatalogSaved() {
      this.$refs.modalCatalogSaved.openModal();
    },
    openModalCatalogPublished() {
      this.$refs.modalCatalogPublished.openModal();
    },
    onSubmit(){
      alert('отправка формы');
      /*this.form.submit('post', '/catalog_creating')
       .then(data => console.log(data))
       .catch(errors => console.log(errors));*/

      //можно и через post
      /*this.form.post('/skills')
       .then(data => console.log(data))
       .catch(errors => console.log(errors));*/
      //для удаления
      //this.form.delete('/skills');
    }
  }
}
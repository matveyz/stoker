import {mapGetters} from 'vuex';
import Headerblock from '../../header-block/header-block.vue';
import axios from 'axios';

import Form from '../../../core/Form';
import ImageUploader from '../../../core/ImageUploader';

import DateRange from '../../forms/date-range.vue';
import FileLoader from '../../forms/file-loader.vue';

import CitiesStreetsSearch from '../../cities-streets-search/cities-streets-search.vue';
import ChooseCategory from '../../choose-ctegory/choose-category.vue';

export default {
  data: function () {
    return {
      form: new Form({
        logo: new ImageUploader('img/partner-2.png'),
        name_ru: '',
        name_ua: '',
        website:'',
        date_start: '',
        date_end: '',
        discount: 0,
        file: '',
        categories: []
      })
    }
  },
  components: {
    'header-block' : Headerblock,
    'date-range': DateRange,
    'file-loader': FileLoader,
    'cities-streets-search' : CitiesStreetsSearch,
    'choose-category' : ChooseCategory,
  },
  computed: {
    ...mapGetters('catalogCreateInstruction', ['instructions','nextStep', 'prevStep']),
  },
  methods: {
    changeDateStart(val){
      this.form.date_start = val;
    },
    changeDateEnd(val){
      this.form.date_end = val;
    },
    changeCategory(category){
      console.log(category);
      if(!this.form.categories.length)
        return;
      if(this.form.categories.indexOf(category) !== -1){
        this.form.categories.push(category);
      }
    },
    onFileChange(file){
      this.form.file = file;
    },
    onLogoChange(e){
      this.form.logo.createImage(e);
    },
    removeImage: function (e) {
      this.form.logo.removeImage();
    },
    //...mapActions('catalogCreateInstruction', ['changeStep']),
    changeStep(){
      this.$emit('next-step', this.nextStep);
    },
    goNextStep(){
      this.$emit('next-step',this.nextStep);
    },
    goPrevStep(){
      this.$emit('prev-step', this.prevStep);
    },
    onSubmit(){
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
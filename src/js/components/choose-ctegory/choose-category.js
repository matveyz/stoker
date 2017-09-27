import {mapGetters, mapActions} from 'vuex';
export default {
  /*data(){
    return {
      selected: {}
    }
  },*/
  computed: {
    ...mapGetters('categories', ['getCategories']),
  },
  methods:{
    ...mapActions('categories', ['activateCategory']),
    categoryChanged(category){
      this.$emit('category-changed', category);
    }
  }
}


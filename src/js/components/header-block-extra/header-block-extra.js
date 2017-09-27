import {mapGetters, mapActions} from 'vuex';

export default {
  props:{
    type: {
      type: String,
      default: 'basic'
    },
    extraClass: [String]
  },
  data(){
    return {

    }
  },
}
import {mapGetters} from 'vuex';
import Headerblock from '../../header-block/header-block.vue';
import instructionsListBlock from '../../instruction-list-block/instruction-list-block.vue';

export default {
  components: {
    'header-block' : Headerblock,
    'instruction-list-block' : instructionsListBlock,
  },
  computed: {
    ...mapGetters('catalogCreateInstruction', ['instructions'])
  },
  methods: {
    //...mapActions('catalogCreateInstruction', ['changeStep']),
    changeStep(){
      this.$emit('next-step');
    }
  }
}
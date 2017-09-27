import {mapGetters, mapActions} from 'vuex';

export default {
  computed: {
    ...mapGetters('catalogCreateInstruction',['steps'])
  },
  methods: {
    changeStep(step){
      this.$emit('change-step',step);
    }
  }
}
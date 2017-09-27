import {mapGetters} from 'vuex';
export default {
  name: 'social-icons',
  computed: {
    ...mapGetters({
      icons: 'socialIcons/icons'
    })
  },
}
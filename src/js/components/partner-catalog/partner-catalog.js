import {mapGetters, mapActions} from 'vuex';

export default {
  name: 'partner-catalog',// TODO activate catalog reload not in time
  props: ['partnerCatalog'], //same as partner-catalog for v-bind: THIS(CHILD)PROP="PARENT VAR"
  components: {},
  data() {
    return {
      show: false
    }
  },
  computed: {
    ...mapGetters('partnerCatalogs', ['catalogs'])
  },
  methods: {
    ...mapActions('partnerCatalogs', ['activateCatalog']),
    showExtra(toggle) {
      typeof(toggle) === 'boolean' ? this.show = toggle : console.error('argument must be boolean');
    },
    deactivate(catalog) {
      if (catalog.active) {
        return '';
      } else {
        return ' deactivated';
      }
    },
    dateCheck(catalog) {
      //TODO переделать чтобы функция не вызывалась много раз и чтобы она вотчилась по часам и обновлялась сама

      let catalogDateArr = catalog.date.split('.');

      // let catalogDate = new Date('20' + catalogDateArr[2], catalogDateArr[1] - '1', catalogDateArr[0]);
      let catalogDateAddDay = new Date('20' + catalogDateArr[2], catalogDateArr[1] - '1', parseInt(catalogDateArr[0], 10) + 1);

      // let catalogDateTime = catalogDate.getTime();
      let catalogDateAddDayTime = catalogDateAddDay.getTime();

      let dateNow = new Date();
      let dateTimeNow = dateNow.getTime();

      if ((dateTimeNow > catalogDateAddDayTime)) {
        return false;
      } else {
        let daysLeft = (((catalogDateAddDayTime - dateTimeNow) / 3600) / 1000 / 24) | 0;
        let hoursLeft = (((catalogDateAddDayTime - dateTimeNow) / 3600) / 1000 % 24) | 0;
        let minutesLeft = (((catalogDateAddDayTime - dateTimeNow) / 60) / 1000 % 60) | 0;
        let secondsLeft = ((catalogDateAddDayTime - dateTimeNow) / 1000 % 60) | 0;
        console.log(daysLeft, hoursLeft, minutesLeft, secondsLeft);
        if (daysLeft === 0) {
          return hoursLeft;
        } else {
          return {daysLeft, hoursLeft};
        }
      }
    }
  }
}
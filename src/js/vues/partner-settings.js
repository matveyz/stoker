import store from  '../store/index';
import Vue from 'vue';

import sendMsg from '../components/send-msg/send-msg.vue';
// import modalSendMsgPartnerGetRss from '../components/modal_send-msg-partner-get-rss/modal_send-msg-partner-get-rss.vue';
// import modal from '../components/modals/modal.vue';
import partnerSettingsCompany from '../components/partner-settings-company/partner-settings-company.vue';
// import modalCompanyColorPick from '../components/modals/modal_company-color-pick/modal_company-color-pick.vue';
import citiesStreetsSearch from '../components/cities-streets-search/cities-streets-search.vue';

var partnerSettings = new Vue({
  el: '#partner-settings',
  components: {
    // 'modal': modal,
    // 'modal_send-msg-partner-get-rss': modalSendMsgPartnerGetRss,
    // 'modal_company-color-pick' : modalCompanyColorPick,
    'send-msg' : sendMsg,
    'partner-settings-company' : partnerSettingsCompany,
    'cities-streets-search' : citiesStreetsSearch,
  },
  store,
  data: {
    getRSS: {
      leftButton: false,
      name: 'get-rss',
      btnName: 'Настроить рассылку',
      text: 'Здесь Вы можете настроить рассылку информации о размещенных каталогах сети.',
      mainClass: 'col-lg-10',
      btnClass: 'col-md-4 col-sm-6 col-sm-push-6 col-md-push-8',
      textClass: 'col-md-8 col-sm-6 col-sm-pull-6 col-md-pull-4'
    },
  },
});

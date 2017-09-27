import sendMsg from '../components/send-msg/send-msg.vue';
import modalSendMsgGetRss from '../components/modal_send-msg-get-rss/modal_send-msg-get-rss.vue';
import Vue from  'vue';
var settings = new Vue({
  el: '#settings',
  components: {
    'modal_send-msg-get-rss': modalSendMsgGetRss,
    'send-msg' : sendMsg
  },
  data: {
    getRSS: {
      leftButton: false,
      name: 'get-rss',
      btnName: 'Настроить рассылку',
      text: 'Получайте регулярно выгодные предложения от Stocker. Настройте рассылку удобным для Вас образом.',
      mainClass: 'col-lg-10',
      btnClass: 'col-md-4 col-sm-6 col-sm-push-6 col-md-push-8',
      textClass: 'col-md-8 col-sm-6 col-sm-pull-6 col-md-pull-4'
    },
    modal: {
      show: false
    }
  },
});

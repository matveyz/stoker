import sendMsg from '../components/send-msg/send-msg.vue';
import modalSendMsg from '../components/modal_send-msg/modal_send-msg.vue';
import Vue from  'vue';

var footer;
footer = new Vue({
    el: '#footer',
    components: {
        'modal_send-msg': modalSendMsg,
        'send-msg': sendMsg,
    },
    data: {
        sendMsg: {
            leftButton: true,
            name: "send-msg",
            btnName: "Отправить нам сообщение",
            text: "Будем рады ответит на любые ваши вопросы, касательно нашего сервиса",
            mainClass: "col-lg-9",
            textClass: "col-md-7 col-sm-6 col-sm-push-6 col-md-push-5",
            btnClass: "col-md-5 col-sm-6 col-sm-pull-6 col-md-pull-7"
        },
        modal: {
            show: false
        }
    },
});

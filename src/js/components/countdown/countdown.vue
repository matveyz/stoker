//TODO: сделать модуль счетчика на vue
<template>
  <div class="countdown">
    <div v-if="!timesUp">
      <div class="countdown-title" v-if="countdown_title"> Осталось {{ days }} <br>до завершения акции</div>
      <div class="countdown-pretext" v-if="countdown_pretext">До конца действия<br>каталога</div>
      <div class="countdown-dash">
        <div class="digit day">{{ days | two_digits }}</div>
        <div class="countdown-dash_title">дней</div>
      </div>
      <div class="countdown-dash">
        <div class="digit hour">{{ hours | two_digits }}</div>
        <div class="countdown-dash_title">часов</div>
      </div>
      <div class="countdown-dash">
        <div class="digit min">{{ minutes | two_digits }}</div>
        <div class="countdown-dash_title">минут</div>
      </div>
      <div class="countdown-dash">
        <div class="digit sec">{{ seconds | two_digits }}</div>
        <div class="countdown-dash_title">секунд</div>
      </div>
    </div>
    <div class="times-up" v-else>
      <div class="countdown-title_times-up">
        <div class="countdown-title-header">Время вышло</div>
        <div class="countdown-title-desc">акция завершена</div>
      </div>
      <div class="countdown-dash">
        <div class="digit day">00</div>
        <div class="countdown-dash_title">дней</div>
      </div>
      <div class="countdown-dash">
        <div class="digit hour">00</div>
        <div class="countdown-dash_title">часов</div>
      </div>
      <div class="countdown-dash">
        <div class="digit min">00</div>
        <div class="countdown-dash_title">минут</div>
      </div>
      <div class="countdown-dash">
        <div class="digit sec">00</div>
        <div class="countdown-dash_title">секунд</div>
      </div>
      <div v-if="show_btn">
        <button class="btn-bg-secondary">Удалить</button>
      </div>
    </div>
  </div>
</template>

<script>
  /*import cd from '../../lib/jquery.countdown.min';*/
  export default {
    props: {
      date: {
        type: String
      },
      countdown_title: {
        type: Boolean,
        default: false
      },
      countdown_pretext: {
        type: Boolean,
        default: false
      },
      show_btn: {
        type: Boolean,
        default: false
      }

    },
    data() {
      return {
        now: Math.trunc((new Date()).getTime() / 1000)
      }
    },
    mounted(){
      if(!this.timesUp){
        window.setInterval(() => {
          this.now = Math.trunc((new Date()).getTime() / 1000);
        },1000);
      }
    },
    computed: {
      getDate(){
        return Math.trunc(Date.parse(this.date) / 1000)
      },
      timesUp() {
        if(this.getDate - this.now < 0){
          this.$emit('times-up');
          return true;
        }
        return false;
      },
      seconds() {
        return (this.getDate - this.now) % 60;
      },

      minutes() {
        return Math.trunc((this.getDate - this.now) / 60) % 60;
      },

      hours() {
        return Math.trunc((this.getDate - this.now) / 60 / 60) % 24;
      },

      days() {
        return Math.trunc((this.getDate - this.now) / 60 / 60 / 24);
      },
      text() {
        let parser = new DOMParser();
        return parser.parseFromString(this.countdowntext, "text/html");
      }
    },
    filters:{
      two_digits(value) {
        if(value.toString().length <= 1)
        {
          return "0"+value.toString();
        }
        return value.toString();
      }
    },
    methods: {},
  }
</script>


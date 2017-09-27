<template>
  <div class="date-range">
    <slot name="title">Период действия</slot>
      <datepicker
          :language="language"
          :format="format"
          :input-class="input_class"
          :wrapper-class="wrapper_class"
          :monday-first="true"
          :calendarSvgButton="true"
          :calendarSvgIcon="'icon-calendar'"
          :disabled="disabled"
          @selected="changedDateStart"
          :name="nameStart"
          v-model="getDateStart"
          placeholder="От">
      </datepicker>
    <datepicker
          :language="language"
          :format="format"
          :input-class="input_class"
          :wrapper-class="wrapper_class"
          :monday-first="true"
          :calendarSvgButton="true"
          :calendarSvgIcon="'icon-calendar'"
          :disabled="disabled"
          :name="nameEnd"
          v-model="getDateEnd"
          @selected="changedDateEnd"
          placeholder="До">
      </datepicker>
  </div>
</template>

<script>
  import Datepicker from '../../lib/vue-datepicker/Datepicker.vue';
  export default {
    props:{
      isDisabled: {
        type: Boolean,
        default: false
      },
      nameStart: {
        value: String,
        default: 'date_start'
      },
      nameEnd: {
        value: String,
        default: 'date_end'
      },
      dateStart:{},
      dateEnd:{}
    },
    data () {
      return {
        format: 'dd.MM.yyyy',
        language: 'ru',
        input_class: 'form-control date-range__input',
        wrapper_class: 'date-range__field',
        disabled: {},
      }
    },
    computed:{
      getDateStart (){
        return this.dateStart;
      },
      getDateEnd (){
        return this.dateEnd;
      }
    },
    created(){
      if(this.isDisabled){
        this.disabled = {
          to: new Date(),
        };
        this.disabled.to.setDate(this.disabled.to.getDate() - 1);
      }
    },
    components: {
      Datepicker
    },
    methods: {
      changedDateStart (val){
        this.$emit('changed-date-start', val);
      },
      changedDateEnd (val){
        this.$emit('changed-date-end', val);
      },
      disableTo (val) {
        console.log(val);
        if (typeof this.disabled.to === 'undefined') {
          this.disabled = {
            to: null,
            from: this.disabled.from
          };
        }
        this.disabled.to = val;
      },
      disableFrom (val) {
        if (typeof this.disabled.from === 'undefined') {
          this.disabled = {
            to: this.disabled.to,
            from: null
          };
        }
        this.disabled.from = val;
      }
    }
  }
</script>
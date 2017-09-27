<template>
  <span class="tooltip-parent">
    <span @click="doTrigger"><slot></slot></span>
    <div class="tooltip" :style="getCoords" :class="[isActive ?'active':'', position, styleClass]">
      <div class="tooltip-inner center">
        {{text}}
      </div>
      <div class="tooltip-arrow"></div>
    </div>
  </span>
</template>

<script>
  export default {
    props: {
      position: {
        type: String,
        default: 'top'
      },
      text: [String],
      styleClass: {
        type: String,
        default: 'tooltip_primary'
      },
      trigger: {
        type: String,
        default: 'click'
      }
    },
    data(){
      return {
        active: false,
        coords: {
          top: 0,
          left: -112.5
        }
      }
    },
    methods: {
      doTrigger(event){
        if (this.trigger === event.type) {
          this.active = !this.active;
        }
        let target = event.target;
        let vm = this;
        while (true) {
          if (target.tagName == 'SPAN') {
            vm.coords.left = -112.5 + target.childNodes[0].scrollWidth / 2;
            return;
          }
          target = target.parentNode;
        }
      }
    },
    computed: {
      isActive(){
        return this.active;
      },
      getCoords(){
        return {left: this.coords.left + 'px'}
      }
    }
  }
</script>
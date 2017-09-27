<template>
    <li class="dropdown__item">
      <svg :class="'icon-'+ this.item.icon" v-if="showIcon">
        <use :xlink:href="'svg/svg.svg#icon-' + this.item.icon"></use>
      </svg>
      <slot></slot>
    </li>
</template>
<script>
  export default {
    data(){
      return {}
    },
    props: {
      item: Object,
      showIcon: {
        type: Boolean,
        default: false
      }
    }
    ,
    computed: {

      getIcon (){
        console.log(this.item.icon);
        return 'icon icon-' + this.item.icon;
      }
    }
  }
</script>

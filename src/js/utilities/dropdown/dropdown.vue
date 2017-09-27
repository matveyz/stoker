<template>
    <div class="dropdown" @click="isActive = !isActive" :class="{active: isActive}">
      <div class="dropdown__btn">
        <div class="dropdown__name">
          <slot></slot>
        </div>
        <svg class='dropdown__icon icon icon-dropdown'>
          <use xlink:href='svg/svg.svg#icon-dropdown'></use>
        </svg>
      </div>
      <div class="dropdown-wrapper">
        <ul class="dropdown__list">
            <dropdown-item v-for="item in items" :item="item" :key="item" :showIcon="true">{{item.name}}</dropdown-item>
        </ul>
      </div>
    </div>
</template>

<script>
  import dropdownItem from './dropdown-item.vue';
  export default {
    data() {
      return {
        isActive: false
      }
    },
    components: {
      'dropdown-item': dropdownItem
    },
    props: ['items']
  }
</script>

<template id="header-block">
  <div class="header-block" v-if="type === 'basic'">
    <div class="text-center">
      <slot></slot>
      <slot name="text-small"></slot>
    </div>
  </div>
  <div class="header-block header-block_catalog" :class="extraClass" v-else-if="type === 'catalog'">
    <div class="side-left">
      <slot name="pre-text"></slot>
      <slot name="title"></slot>
      <slot name="info_link"></slot>
      <slot></slot>
    </div>
    <div class="side-right">
      <slot name="timer"></slot>
    </div>
  </div>
</template>

<script src="./header-block.js"></script>
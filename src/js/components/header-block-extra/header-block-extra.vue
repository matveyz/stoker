<template id="header-block-extra">
  <div class="header-block-extra" :class="extraClass">
    <div class="side-left">
      <slot name="side-left"></slot>
    </div>
    <div class="side-right">
      <slot name="side-right"></slot>
    </div>
  </div>
</template>

<script src="./header-block-extra.js"></script>
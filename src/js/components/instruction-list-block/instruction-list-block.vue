<template id="instruction-list-block">
  <div class="instruction-list-block">
    <svg class="icon icon-disk vcenter">
      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="svg/svg.svg#icon-disk"
           class="icon-disk"></use>
    </svg>
    <span class="icon-number">{{instruction.id}}</span>
    <span class="text vcenter">{{instruction.desc}}</span>
  </div>
</template>

<script src="./instruction-list-block.js"></script>
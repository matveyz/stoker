<template id="social-icons">
  <div class="social-icons">
    <button v-for="icon in icons" class="social-icons-item btn-primary">
      <svg class="icon">
        <use :xlink:href="'svg/svg.svg#icon-' + icon"></use>
      </svg>
    </button>
  </div>
</template>

<script src="./social-icons.js"></script>
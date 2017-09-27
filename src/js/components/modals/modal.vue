<template id="modal">
  <transition name="modal">
    <div v-if="show" class="modal-mask" @click="closeModal()">
      <div class="modal-container">
        <div class="modal" @click.stop>
          <div class="modal-content-wrapper">
            <slot name="modal-content"></slot>
          </div>
          <button type="button" class="modal-close" title="Close (Esc)" @click="closeModal()">×</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script src="./modal.js"></script>
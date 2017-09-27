<template id="modal_confirm-delete">
  <div class="confirm-delete modal-content">
    <div class="modal-header">
      <div class="modal-desc text">
        <slot></slot>
      </div>
    </div>
    <div class="modal-body">
      <button class="btn-secondary" @click="confirmDelete()">Удалить</button>
      <button class="btn-primary" @click="closeModal()">Отмена</button>
    </div>
  </div>
</template>

<script src="./modal_confirm-delete.js"></script>

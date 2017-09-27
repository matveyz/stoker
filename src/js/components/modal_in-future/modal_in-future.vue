<template id="modal_send-msg">
  <transition name="modal">
    <div class="modal-mask" @click="closeModal()">
      <div class="modal-container">
        <div class="confirm-delete modal in-future" @click.stop>
          <div class="modal-content-wrapper">
            <div class="modal-content">
              <div class="modal-header">
                <div class="modal-desc text-small">
                  Эта возможность будет доступна позже
                </div>
              </div>
              <div class="modal-body">
                <button class="btn-secondary" @click="closeModal()">Хорошо</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script src="./modal_in-future.js"></script>
<template>
  <div class="modal-content">
    <div class="company-color-pick">
      <div class="modal-header">
        <div class="modal-title text-header-highest text-center">
          Выбрать цвет
        </div>
        <div class="modal-desc text-small text-center">
          Выберите корпоративный цвет вашего бренда
        </div>
      </div>
      <div class="modal-body">
        <form>
          <div class="color-picker">
            <button @click="toggleColor(color)" :class="'color-picker-item ' + pickedEl(color)" type="button" v-for="color in colors"
                    :style="'background-color: #' + color"></button>
          </div>
          <button @click="saveColor()" type="button" class="btn-primary">Сохранить</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script src="./modal_company-color-pick.js"></script>


<template id="partner-my-catalogs">
  <div class="col-lg-11 clearfix center">
    <div class="partner-my-catalogs">
      <div class="partner-my-catalogs-header">
        <button class="btn-primary" @click="openModal()">Добавить каталог</button>
        <modal ref="modal" slot="modal">
          <modal_catalog-create slot="modal-content"></modal_catalog-create>
        </modal>
        <sort></sort>
        <span class="catalogs-quantity">Всего 5 каталогов</span>
      </div>
      <partner-catalog :partner-catalog="catalog" v-for="catalog in catalogs" :key="catalog"></partner-catalog>
    </div>
  </div>
</template>

<script src="./partner-my-catalogs.js"></script>
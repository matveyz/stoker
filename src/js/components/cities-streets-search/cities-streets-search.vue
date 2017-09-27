<script src="./cities-streets-search.js"></script>
<template id="cities-streets-search">
  <div class="cities-streets-search">
    <modal ref="modalConfirm">
      <modal_confirm-delete slot="modal-content">
        Если вы удалите выбранный город, то удаляться все связанные с ним адресы
      </modal_confirm-delete>
    </modal>
    <multiselect
        :name="'citiesList'"
        v-model="citiesList.show"
        :options="citiesList.items"
        label="name"
        track-by="name"

        :options-limit="5"
        :multiple="true"
        :close-on-select="true"
        :clear-on-select="false"
        :hide-selected="true"
        placeholder="Введите город"

        @input="updateValueAction(['citiesList', citiesList.show])"
    >
      <span slot="noResult">Городов по вашему запросу не найдено</span>
    </multiselect>
    <multiselect
        :name="'streetsList'"
        v-model="streetsList.show"
        :options="streetsList.filteredItems"
        label="name"
        track-by="name"

        :options-limit="5"
        :multiple="true"
        :close-on-select="true"
        :clear-on-select="false"
        :hide-selected="true"
        placeholder="Введите точный адрес"

        @input="updateValueAction(['streetsList', streetsList.show])"
    >
      <span slot="noResult">Точных адресов по вашему запросу не найдено</span>
    </multiselect>
    <!--<input v-model="citiesList.show" type="search" title="search"
           class="form-control" placeholder="Введите город">
    <svg class='icon icon-search'>
      <use xlink:href='svg/svg.svg#icon-search'></use>
    </svg>
    </div>
    <div v-if="citiesList.show" class="search-products-list">
    <div class="search-products-list-block">
      &lt;!&ndash;todo SLOT:btn-search-item&ndash;&gt;
      <button @click="selectList('citiesList')" v-for="(item, index) in citiesList.items" type="button"
              class="btn-search-item">
        {{item.name}}
        <span @click="deleteSearchItem(['citiesList', index])">
          <svg class="icon">
            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                 xlink:href="svg/svg.svg#icon-cross">
            </use></svg></span>
      </button>
    </div>-->
    <!--
    <div class="search-block">
      <input v-model="streetsList.show" type="search" title="search"
             class="form-control" placeholder="Введите точный адрес">
      <svg class='icon icon-search'>
        <use xlink:href='svg/svg.svg#icon-search'></use>
      </svg>
    </div>
    <div v-if="streetsList.show" class="search-products-list">
      <div class="search-products-list-block">
        &lt;!&ndash;todo SLOT:btn-search-item&ndash;&gt;
        <button v-for="(item, index) in streetsList.items" type="button" class="btn-search-item">
          {{item.name}}
          <span @click="deleteSearchItem(['streetsList', index])">
            <svg class="icon">
              <use xmlns:xlink="http://www.w3.org/1999/xlink"
                   xlink:href="svg/svg.svg#icon-cross">
              </use></svg></span>
        </button>
      </div>
    </div>-->


  </div>
</template>
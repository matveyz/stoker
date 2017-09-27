<template id="my-lists-item">
  <div>
    <transition-group name="list-complete" tag="div">
      <div class="my-lists-item-wrapper" v-for="item in myListItem" :key="item">
        <div class="my-lists-item_zoom"></div>
        <button class="my-lists-item" @click="openModal(item)">
          <span class="my-lists-item-date pull-left">{{item.date}}</span>
          <span class="my-lists-item-amount">{{item.stores | toCountProductsString}}</span>
          <span class="my-lists-item-price pull-right">{{item.price}} грн</span>
        </button>
        <button class="my-lists-item-delete delete-item" @click="removeListItem(item)"
                data-mfp-src="#confirm-delete">
          <svg class="icon icon-cross">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="svg/svg.svg#icon-cross"></use>
          </svg>
        </button>
      </div>
    </transition-group>
    <modal ref="modalConfirm">
      <modal_confirm-delete slot="modal-content"  @delete-confirmed="removeConfirmed">Вы действительно хотите удалить выбранный список?</modal_confirm-delete>
    </modal>
  </div>
</template>


<script src="./my-list-item.js"></script>
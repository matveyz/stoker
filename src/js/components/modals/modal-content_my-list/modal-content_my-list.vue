<template>
  <div class="my-list-modal-content" :class="{edited: isEdited}">
    <div class="modal-header my-list-modal-header">
      <div class="my-list-modal-header-title">
        <div class="modal-header__title modal-header__title_semibold">
          {{listItem.name}}
        </div>
        <div class="edit-header-title">Изменить имя</div>
      </div>
      <header-extra>
        <template slot="side-left">
          <template v-if="!isEdited">
            <dropdown class="dropdown_secondary-bg" :items="dropdownItems">Отправить</dropdown>
            <button class="btn-primary btn-icon">
              <svg class="icon icon-share">
                <use xlink:href="svg/svg.svg#icon-share"></use>
              </svg>
              <span>Поделиться</span>
            </button>
          </template>
          <template v-else>
            <button class="btn-primary" @click="editList"><span>Сохранить</span></button>
            <button class="btn-secondary"><span>Удалить</span></button>
          </template>
        </template>
        <template slot="side-right">
          <template v-if="!isEdited">
            <button class="btn-primary" @click="editList"><span>Редактировать</span></button>
            <button class="btn-secondary" @click="confirmModalListRemove"><span>Удалить</span></button>
          </template>
          <template v-else>
            <button class="delete-multi pull-right clearfix">
              <span>Удалить выбранные</span>
              <span class="icon icon-trash">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="2 -3.1 28.6 28.6">
  <g transform="translate(-3.602 -3.226)">
    <path fill="#FF5749"
          d="M26.1 11.7v14c0 .6-.4 1-1 1h-11c-.6 0-1-.4-1-1v-14h13m2-2h-17v16c0 1.7 1.3 3 3 3h11c1.7 0 3-1.3 3-3v-16z"/>
  </g>
  <path fill="none" stroke="#FF5749" stroke-width="2" stroke-miterlimit="10"
        d="M12.7 21.3V10.7M16 21.3V10.7m3.3 10.6V10.7"/>
  <g transform="translate(-3.602 -3.226)">
    <path fill="none" stroke="#FF5749" stroke-width="2" stroke-miterlimit="10"
          d="M11.2 8.4h17m-12.8.1V6c0-1 .8-1.9 1.9-1.9l4.8-.1c1 0 1.9.8 1.9 1.9v2.5"/>
  </g>
</svg>
                </span>
            </button>
          </template>
        </template>
      </header-extra>

    </div>
    <div class="modal-body my-list-modal-body clearfix">
      <div class="my-list-table my-list-table-header">
        <div class="row">
          <div class="col-md-6">
            <div class="my-list-table-header__item">Название</div>
          </div>
          <div class="col-md-2">
            <div class="my-list-table-header__item center">Цена</div>
          </div>
          <div class="col-md-2">
            <div class="my-list-table-header__item center">Количество</div>
          </div>
          <div class="col-md-2">
            <div class="my-list-table-header__item my-list-table-header__item_total text-right">Сумма</div>
          </div>
        </div>
      </div>
      <div class="my-list-table-body">
        <div v-for="store in stores" :key="store.store_id">
          <div class="my-list-table-brand_color" :style="{ backgroundColor: store.color}"></div>
          <div class="my-list-table my-list-table-brand" :class="{active: store.active}">
            <div class="my-list-table-brand__name">{{store.name}}
              <span class="my-list-table-brand__link" v-if="store.link" @click="goLink(store.link)"><svg
                  class='icon icon-dropdown-right'>
              <use xlink:href='svg/svg.svg#icon-dropdown'></use>
            </svg> <span class="">В магазин</span></span></div>
            <svg @click="store.active = !store.active" class='icon icon-dropdown'>
              <use xlink:href='svg/svg.svg#icon-dropdown'></use>
            </svg>
          </div>

          
          <div class="my-list-table-products">
            <transition-group name="fade-list">
              <div class="my-list-table my-list-table-products__item" v-for="product in getStoreProducts(store.id)"
                   :key="product.product_id" :class="{expired: isExpired(product.date_end)}"
                   v-if="store.active">
                <template v-if="!isEdited">
                  <div class="row">
                    <div class="col-md-6">
                      <div class=" vcenter">
                        <a href="#">{{product.name}}</a>
                        <tooltip
                            v-if="isExpired(product.date_end)"
                            :text="'К сожалению, акция на данный товар, была завершена'"
                            :styleClass="'tooltip_secondary'">
                          <svg class='icon icon-watch'>
                            <use xlink:href='svg/svg.svg#icon-watch'></use>
                          </svg>
                        </tooltip>
                      </div>
                    </div>
                    <div class="col-md-2">
                      <div class="my-list-table-products__item_price vcenter center">{{product.price | сurrency}}</div>
                    </div>
                    <div class="col-md-2">
                      <div class="my-list-table-products__item_count vcenter center">{{product.count}}</div>
                    </div>
                    <div class="col-md-2">
                      <div class="my-list-table-products__item_total text-right">{{getProductTotal(product) | сurrency
                        }}
                      </div>
                    </div>
                  </div>
                </template>
                <template v-else>
                  <div class="row">
                    <div class="col-md-6 vcenter">
                      <div class="my-list-table-products__item_name">
                        <label>
                          <input type="checkbox" hidden :name="'product-'+product.id">
                          <svg class="icon icon-check-empty"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="svg/svg.svg#icon-circle"></use></svg>
                          <svg class="icon icon-checked"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="svg/svg.svg#icon-checked"></use></svg>
                        </label>
                        <a href="#">
                          {{product.name}}
                        </a>
                        <tooltip
                            v-if="isExpired(product.date_end)"
                            :text="'К сожалению, акция на данный товар, была завершена'"
                            :styleClass="'tooltip_secondary'">
                          <svg class='icon icon-watch'>
                            <use xlink:href='svg/svg.svg#icon-watch'></use>
                          </svg>
                        </tooltip>
                      </div>
                    </div>
                    <div class="col-md-2 vcenter">
                      <div class="my-list-table-products__item_price center">{{product.price | сurrency}}</div>
                    </div>
                    <div class="col-md-2 vcenter">
                      <product-counter class="my-list-table-products__item_count center"
                                       :disabled="isExpired(product.date_end)"
                                       @countChange="product.count = $event; calculateTotal(product)"
                                       :value="product.count">
                      </product-counter>
                    </div>
                    <div class="col-md-2 vcenter">
                      <div class="my-list-table-products__item_total text-right">
                        {{product.total | сurrency}}
                        <button class="my-list-table-products__delete-item delete-item" @click="removeProduct(item)">
                          <svg class="icon icon-cross">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="svg/svg.svg#icon-cross"></use>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </template>
              </div>
            </transition-group>
          </div>
        </div>
        <!--<div v-for="store in getStores" :key="store.id">
          <div class="my-list-table-brand_color" :style="{ backgroundColor: store.color}"></div>
          <div class="my-list-table my-list-table-brand" :class="{active: store.active}">
            <div class="my-list-table-brand__name">{{store.name}}
              <span class="my-list-table-brand__link" v-if="store.link" @click="goLink(store.link)"><svg
                  class='icon icon-dropdown-right'>
              <use xlink:href='svg/svg.svg#icon-dropdown'></use>
            </svg> <span class="">В магазин</span></span></div>
            <svg @click="store.active = !store.active" class='icon icon-dropdown'>
              <use xlink:href='svg/svg.svg#icon-dropdown'></use>
            </svg>
          </div>
          <div class="my-list-table-products">
            <transition-group name="fade-list">
              <div class="my-list-table my-list-table-products__item" v-for="product in getStoreProducts(store.id)"
                   :key="product.product_id" :class="{expired: isExpired(product.date_end)}"
                   v-if="store.active">
                <template v-if="!isEdited">
                  <div class="row">
                    <div class="col-md-6">
                      <div class=" vcenter">
                        <a href="#">{{product.name}}</a>
                        <tooltip
                            v-if="isExpired(product.date_end)"
                            :text="'К сожалению, акция на данный товар, была завершена'"
                            :styleClass="'tooltip_secondary'">
                          <svg class='icon icon-watch'>
                            <use xlink:href='svg/svg.svg#icon-watch'></use>
                          </svg>
                        </tooltip>
                      </div>
                    </div>
                    <div class="col-md-2">
                      <div class="my-list-table-products__item_price vcenter center">{{product.price | сurrency}}</div>
                    </div>
                    <div class="col-md-2">
                      <div class="my-list-table-products__item_count vcenter center">{{product.count}}</div>
                    </div>
                    <div class="col-md-2">
                      <div class="my-list-table-products__item_total text-right">{{getProductTotal(product) | сurrency
                        }}
                      </div>
                    </div>
                  </div>
                </template>
                <template v-else>
                  <div class="row">
                    <div class="col-md-6 vcenter">
                      <div class="my-list-table-products__item_name">
                        <label>
                          <input type="checkbox" hidden :name="'product-'+product.id">
                          <svg class="icon icon-check-empty"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="svg/svg.svg#icon-circle"></use></svg>
                          <svg class="icon icon-checked"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="svg/svg.svg#icon-checked"></use></svg>
                        </label>
                        <a href="#">
                          {{product.name}}
                        </a>
                        <tooltip
                            v-if="isExpired(product.date_end)"
                            :text="'К сожалению, акция на данный товар, была завершена'"
                            :styleClass="'tooltip_secondary'">
                          <svg class='icon icon-watch'>
                            <use xlink:href='svg/svg.svg#icon-watch'></use>
                          </svg>
                        </tooltip>
                      </div>
                    </div>
                    <div class="col-md-2 vcenter">
                      <div class="my-list-table-products__item_price center">{{product.price | сurrency}}</div>
                    </div>
                    <div class="col-md-2 vcenter">
                      <product-counter class="my-list-table-products__item_count center"
                                       :disabled="isExpired(product.date_end)"
                                       @countChange="product.count = $event; calculateTotal(product)"
                                       :value="product.count">
                      </product-counter>
                    </div>
                    <div class="col-md-2 vcenter">
                      <div class="my-list-table-products__item_total text-right">
                        {{product.total | сurrency}}
                        <button class="my-list-table-products__delete-item delete-item" @click="removeProduct(item)">
                          <svg class="icon icon-cross">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="svg/svg.svg#icon-cross"></use>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </template>
              </div>
            </transition-group>
          </div>
        </div>-->
      </div>
    </div>
    <div class="modal-footer my-list-modal-footer">
      <header-extra>
        <template slot="side-left">
          <div class="my-list-modal-footer__products-amount">{{listItem.productsAmount | toProductsString }} в списке
          </div>
        </template>
        <template slot="side-right">
          <div class="my-list-modal-footer__total">Всего:  <span>{{getProductsTotal | сurrency }}</span></div>
        </template>
      </header-extra>
      <header-extra>
        <template slot="side-left">
          <dropdown class="dropdown_secondary-bg" :items="dropdownItems">Отправить</dropdown>
          <button class="btn-primary btn-icon">
            <svg class="icon icon-share">
              <use xlink:href="svg/svg.svg#icon-share"></use>
            </svg>
            <span>Поделиться</span>
          </button>
        </template>
        <template slot="side-right">
          <button class="btn-primary">
            <span>Редактировать</span>
          </button>
          <button class="btn-secondary" @click="confirmModalListRemove"><span>Удалить</span></button>
        </template>
      </header-extra>
    </div>
    <div class="my-list-modal-flash modal-flash modal-flash_green center">
      Вы экономите минимум 100 грн!
    </div>
  </div>
</template>
<script src="./modal-content_my-list.js"></script>
<template id="modal_send-msg-get-rss">
  <transition name="modal">
    <div class="modal-mask" @click="closeModal()">
      <div class="modal-container">
        <div class="get-rss-form modal" id="get-rss-form" @click.stop>
          <div class="modal-content-wrapper">
            <div class="modal-content">
              <div class="modal-header">
                <div class="modal-title text-header-highest">Настроить рассылку</div>
              </div>
              <div class="input-for-rss-email">
                <input type="text" placeholder="Введите e-mail" id="email-input">
              </div>
              <div class="modal-body">
                <form action="" method="post">
                  <div class="modal-body-block">
                    <div class="search-block">
                      <input v-model="cityList.show" type="search" title="search"
                             class="form-control">
                      <svg class='icon icon-search'>
                        <use xlink:href='svg/svg.svg#icon-search'></use>
                      </svg>
                    </div>

                    <div v-if="cityList.show" class="search-products-list">
                      <div class="search-products-list-block">
                        <!--todo SLOT:btn-search-item-->
                        <button v-for="item in cityList.items" type="button" class="btn-search-item">
                          {{item.name}}
                          <span @click="deleteCityItem(item)"><svg class="icon">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                 xlink:href="svg/svg.svg#icon-cross"></use>
                          </svg></span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="modal-body-block">
                    <div class="modal-choose-company-rss">
                      <label for="form-control-company" class="form-control-company">
                        <select required name="day" id="form-control-company" class="form-control">
                          <option selected>Выбрать компанию</option>
                          <option value="">Компания</option>
                          <option value="">Компания</option>
                          <option value="">Компания</option>
                          <option value="">Компания</option>
                        </select>
                        <svg class='icon icon-arrow-down'>
                          <use xlink:href='svg/svg.svg#icon-arrow'></use>
                        </svg>
                      </label>
                    </div>
                  </div>
                  <div class="modal-body-block">
                    <div class="modal-choose-category-rss">
                      <label for="form-control-cat" class="form-control-cat">
                        <select required name="day" id="form-control-cat" class="form-control">
                          <option selected>Выбрать категорию</option>
                          <option value="">Категория</option>
                          <option value="">Категория</option>
                          <option value="">Категория</option>
                          <option value="">Категория</option>
                          <option value="">Категория</option>
                        </select>
                        <svg class='icon icon-arrow-down'>
                          <use xlink:href='svg/svg.svg#icon-arrow'></use>
                        </svg>
                      </label>
                    </div>
                  </div>
                  <div class="modal-body-block">
                    <div class="text-high">Подписаться на продукт</div>

                    <div class="search-block">
                      <!--TODO keydown to kepress?(keyup на крайняк) -->
                      <input v-model="productsList.show" type="search" title="search"
                             class="form-control">
                      <svg class='icon icon-search'>
                        <use xlink:href='svg/svg.svg#icon-search'></use>
                      </svg>
                    </div>

                    <div v-if="productsList.show" class="search-products-list">
                      <div class="text-big">Список продуктов</div>
                      <div class="search-products-list-block">
                        <!--todo SLOT:btn-search-item-->
                        <button v-for="item in productsList.items" type="button" class="btn-search-item">
                          {{item.name}}
                          <span @click="deleteSearchItem(item)"><svg class="icon">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                 xlink:href="svg/svg.svg#icon-cross"></use>
                          </svg></span>
                        </button>
                      </div>
                      <div class="search-products-list-block">
                        <span class="text-big">Дни рассылки</span>
                        <ul class="days-control">

                          <li v-for="day in days" class="checkbox">
                            <input type="checkbox" :id="day.alias">
                            <label :for="day.alias">
                              <span>{{day.text}}</span>
                              <svg class="icon">
                                <use xlink:href="svg/svg.svg#icon-circle"></use>
                              </svg>
                              <svg class="icon">
                                <use xlink:href="svg/svg.svg#icon-checked"></use>
                              </svg>
                            </label>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="modal-body-block">
                    <div class="row">
                      <div class="col-sm-7">
                        <div class="text-big">Рассылать по</div>
                        <ul class="days-control">
                          <li v-for="day in days" class="checkbox">
                            <input type="checkbox" :id="day.alias">
                            <label :for="day.alias">
                              <span>{{day.text}}</span>
                              <svg class="icon">
                                <use xlink:href="svg/svg.svg#icon-circle"></use>
                              </svg>
                              <svg class="icon">
                                <use xlink:href="svg/svg.svg#icon-checked"></use>
                              </svg>
                            </label>
                          </li>
                        </ul>
                        <div class="modal-time-control">
                          <label for="form-control-time" class="form-control-time">
                            <select required name="day" id="form-control-time" class="form-control">
                              <option value="09:00" selected>09:00</option>
                              <option value="10:00">10:00</option>
                            </select>
                            <svg class='icon icon-arrow-down'>
                              <use xlink:href='svg/svg.svg#icon-arrow'></use>
                            </svg>
                          </label>
                        </div>
                      </div>
                      <div class="col-sm-5">
                        <div class="text-big">Уведомлять меня</div>
                        <ul>
                          <!--todo SLOT:checkbox-->
                          <li v-for="notify in notifies" class="checkbox">
                            <input type="checkbox" :id="'get-rss-' + notify.alias">
                            <label :for="'get-rss-' + notify.alias">
                              <svg class="icon">
                                <use xlink:href="svg/svg.svg#icon-circle"></use>
                              </svg>
                              <svg class="icon">
                                <use xlink:href="svg/svg.svg#icon-checked"></use>
                              </svg>
                              <span>{{notify.text}}</span>
                            </label>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="modal-rss-button-save">
                    <button type="submit" class="btn-primary modal-btn">Сохранить</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <button class="modal-close" title="Close (Esc)" @click="closeModal()">×</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script src="./modal_send-msg-get-rss.js"></script>